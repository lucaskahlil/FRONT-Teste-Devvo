
import { IRingCarouselProps } from "./interface";
import { RingCard } from "../../cards";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";

export function RingCarousel({ rings }: IRingCarouselProps) {

    return (
        <Carousel
            className="w-auto flex justify-center al"
            opts={{
                align: "start",
                loop: true,
            }}>
            <CarouselContent>
                {rings.map((ring) => (
                    <CarouselItem key={ring.id} className="flex-shrink-0 w-full md:basis-1/2 lg:basis-1/3">
                        <RingCard ring={ring} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel >
    )
}
