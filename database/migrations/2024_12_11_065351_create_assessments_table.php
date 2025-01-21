<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('assessments', function (Blueprint $table) {
            $table->id();
            $table->integer("pitta")->default(0);
            $table->integer("kapha")->default(0);
            $table->integer("vata")->default(0);

            $table->integer("total_questions")->default(0);

            // $table->unsignedBigInteger("user_id");
            // $table->foreign("user_id")->references("id")->on("users");

            $table->boolean("completed")->default(false);
            $table->string("name");
            $table->string("phone");
            $table->string("gender");
            $table->integer("age");
            $table->enum("payment_status", ["pending", "failed", "paid"])->default("pending");
            $table->string("instamojo_payment_id")->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assessments');
    }
};
