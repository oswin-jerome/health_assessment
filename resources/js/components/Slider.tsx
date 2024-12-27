import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { DotButton, useDotButton } from "./ui/SliderDotButton";

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000 }),
    ]);
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
                                        Discover Your Ayurvedic Balance
                                    </h1>
                                    <p className="mx-auto max-w-[700px] text-white/70 md:text-xl">
                                        Take our personalized questionnaire and
                                        receive a tailored diet and exercise
                                        plan based on Ayurvedic principles.
                                    </p>
                                </div>
                                <div className="space-x-4">
                                    <Button asChild>
                                        <Link href="/assessments/create">
                                            Start Questionnaire
                                        </Link>
                                    </Button>
                                    <Button variant={"outline"} asChild>
                                        <Link href="#">Astrology</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="embla__slide bg-app-800">Slide 2</div>
                <div className="embla__slide bg-app-800">Slide 3</div>
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
