"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroSlides } from "@/constants";
import Image from "next/image";

const Slides = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full ml-12"
    >
      <CarouselContent className="-ml-4">
        {heroSlides.map((slide) => (
          <CarouselItem
            key={slide.id}
            className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-xl -pr-8"
          >
            <Image
              src={slide.imageUrl}
              alt={slide.alt}
              width={350}
              height={200}
              className="rounded-xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-hover-blue  dark:bg-hover-gray" />
      <CarouselNext className="bg-hover-blue  dark:bg-hover-gray" />
    </Carousel>
  );
};

export default Slides;
