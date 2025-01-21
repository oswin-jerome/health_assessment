import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { DotButton, useDotButton } from "./ui/SliderDotButton";
import { useTranslation } from "react-i18next";

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000 }),
    ]);
    const { t } = useTranslation();
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    return (
        <div className="embla relative" ref={emblaRef}>
            <div className="embla__container h-[60vh]">
                <div className="embla__slide bg-app-800 text-white">
                    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                        {t("Discover Your Ayurvedic Balance")}
                                    </h1>
                                    <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                                        {t("hero-description")}
                                    </p>
                                </div>
                                <div className="space-x-4">
                                    <Button asChild>
                                        <Link href="/assessments/create">
                                            {t("Take the Questionnaire")}
                                        </Link>
                                    </Button>
                                    <Button variant={"outline"} asChild>
                                        <a href="https://wa.me/918618895713">
                                            {t("Astrology")}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="embla__slide bg-app-800">
                    <div className="">
                        <img
                            src="/diet.jpg"
                            className="w-full opacity-65"
                            alt=""
                        />
                    </div>
                </div>
                <div className="embla__slide bg-app-800">
                    <div className="">
                        <img
                            src="/diet2.jpg"
                            className="w-full opacity-65 object-center h-full"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3  absolute z-40 bottom-4 left-0 right-0 ">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={" rounded-full ".concat(
                            index === selectedIndex
                                ? " border bg-white size-3"
                                : "border size-3"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
