import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CardJob = () => {
  // FETCHING untuk pengisian data JOB
  return (
    <Card className="w-36 h-36 flex justify-between">
      <CardHeader>
        <CardTitle>IT</CardTitle>
        <CardDescription>Full Stack Developer</CardDescription>
      </CardHeader>

      <CardContent>
        <p>13 employee</p>
      </CardContent>
    </Card>
  );
};

export default CardJob;
