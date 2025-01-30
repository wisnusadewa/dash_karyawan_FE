import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { month: 'January', profit: 500000000 },
  { month: 'February', profit: 200000000 },
  { month: 'March', profit: 300000000 },
  { month: 'April', profit: 350000000 },
  { month: 'May', profit: 250000000 },
  { month: 'June', profit: 450000000 },
];

const chartConfig = {
  profit: {
    label: 'Profit',
    color: '#2563eb',
  },
} satisfies ChartConfig;

const ChartData = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <ChartTooltip content={<ChartTooltipContent hideLabel labelKey="profit" nameKey="month" />} />
        <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default ChartData;
