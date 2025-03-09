import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Jobs } from '@/features/auth/hooks/userType';

interface JobsType {
  job: Jobs;
}

const CardJob = ({ job }: JobsType) => {
  // FETCHING untuk pengisian data JOB
  // console.log('job card', job);

  return (
    <Card className="w-36 h-36 flex justify-between">
      <CardHeader>
        <CardTitle>{job?.title}</CardTitle>
        <CardDescription>{job?.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{job.employees.length} Employee</p>
      </CardContent>
    </Card>
  );
};

export default CardJob;
