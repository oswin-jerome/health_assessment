<?php

namespace App\Http\Service;

use App\Models\Appointment;
use App\Models\Assessment;
use App\Models\Payment;
use Exception;
use Instamojo\Instamojo;

class InstaMojoService
{
	private $api;
	public function __construct()
	{
		$this->api = Instamojo::init("app", [
			"client_id" =>  env("INSTAMOJO_CLIENT_ID"),
			"client_secret" => env("INSTAMOJO_CLIENT_SECRET"),
		], env("INSTAMOJO_TEST"));
	}
	public function create_payment_request(Assessment $appointment)
	{
		// dd($appointment->phone);
		$response = $this->api->createPaymentRequest(array(
			"purpose" => "AyushMitra",
			"amount" => 9,
			"send_email" => false,
			"email" => "ayushmithra111@gmail.com",
			"phone" => $appointment->phone,
			"buyer_name" => $appointment->name,
			"redirect_url" => route("assessments.show", $appointment),
			"webhook" => route("assessments.instamojo.callback", $appointment),
			"allow_repeated_payments" => false,
		));

		$appointment->instamojo_payment_id = $response['id'];
		// $appointment->instamojo_payment_payload = $response;
		$appointment->save();

		return $response;
	}


	public function validate_payment($id)
	{
		$res =  $this->api->getPaymentDetails($id);
		return $res;
	}

	public function create_refund(Assessment $appointment)
	{
		try {
			$res =  $this->api->createRefundForPayment($appointment->instamojo_payment_id, array(
				"type" => "TAN",
				"body" => "Appointment Canceled",
				"refund_amount" => $appointment->fee,
				"transaction_id" => "REFUND_" . $appointment->id

			));
			$appointment->refund_status = "Completed";
			$appointment->refund_id = $res["refund"]["id"];
			$appointment->save();
		} catch (Exception $e) {
			$appointment->refund_status = $e->getMessage();
			$appointment->save();
			// dd($e);
		}

		// dd($res);
		// return $res;
	}
}
