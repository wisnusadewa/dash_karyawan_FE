import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { CurrencyRupiah } from '@/utils/CurrencyRupiah';

type CardInfoDashProps = {
  title: string;
  nominal: number;
  description: string;
};

const CardInfoDash = ({ title, nominal, description }: CardInfoDashProps) => {
  return (
    <div className="w-[130px] lg:w-[200px] h-full">
      <Card className="h-full flex justify-between p-5">
        <CardHeader>
          <CardTitle>
            <Label className="text-[12px] lg:text-[16px]">{title}</Label>
          </CardTitle>
          <CardDescription>
            <Label className=" text-[10px] lg:text-[14px]">{description}</Label>
          </CardDescription>
        </CardHeader>
        <CardContent className="font-semibold">
          <Label className=" text-[12px] lg:text-[18px]">{CurrencyRupiah(nominal)}</Label>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardInfoDash;
