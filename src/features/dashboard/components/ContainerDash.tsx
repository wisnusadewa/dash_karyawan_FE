import CarouselComp from './CarouselComp';
import CardInfoDash from './CardInfoDash';
import { Label } from '@/components/ui/label';
import { PieChartData } from './PieChartData';
import { LineChartData } from './LineChartData';

const ContainerDash = () => {
  return (
    <div className="flex flex-col h-full w-full p-5 shadow-neumorph rounded-[15px] gap-2 lg:gap-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        <Label>List Job</Label>
        <CarouselComp />
      </div>

      <div className="flex flex-col w-full h-full gap-3 ">
        <Label>Information</Label>
        {/* CARD FLEX */}
        <div className="flex h-full w-full gap-5">
          <CardInfoDash title={'Total Payroll Cost'} nominal={200000000} description={'total seluruh pembayaran karyawan'} />
          <CardInfoDash title={'Profit Company'} nominal={700000000} description={'total pendapatan perusahaan'} />
          <CardInfoDash title={'Summary'} nominal={500000000} description={'laba rugi perusahaan'} />
        </div>
      </div>

      {/* CHART */}
      <div className=" h-full flex flex-col gap-3">
        <Label className="flex items-end h-full">Chart</Label>
        <div className="flex gap-2 justify-between items-end h-full">
          <div className="w-1/2 h-full rounded-[15px] px-1">
            <PieChartData />
          </div>
          <div className="w-1/2 h-full rounded-[15px] px-1">
            <LineChartData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDash;
