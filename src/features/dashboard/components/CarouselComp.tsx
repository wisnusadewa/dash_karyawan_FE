import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import CardJob from './CardJob';

const CarouselComp = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="my-2 ">
        {/* md:basis-1/2 lg:basis-1/3 */}
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
          <CardJob />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
          <CardJob />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
          <CardJob />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
          <CardJob />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
          <CardJob />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComp;
