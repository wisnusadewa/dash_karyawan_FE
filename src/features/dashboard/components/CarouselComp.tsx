import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Jobs } from '@/features/auth/hooks/userType';
import useJob from '../hooks/useJob';
import CardJob from './CardJob';

const CarouselComp = () => {
  const { getAllJob } = useJob();
  const { data } = getAllJob();

  // console.log('all job corausel', data);

  return (
    <Carousel className="w-full">
      <CarouselContent className="my-2 ">
        {/* md:basis-1/2 lg:basis-1/3 */}

        {data?.jobs.map((job: Jobs, i: number) => {
          return (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
              <CardJob job={job} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComp;
