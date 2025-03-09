import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const NoAccess: React.FC = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/profile');
  };
  return (
    <div className="flex h-screen w-full justify-center items-center bg-mainClr">
      <Card className=" w-1/2 h-1/4">
        <CardContent className="flex flex-col justify-center items-center gap-5 h-full ">
          <Label className="text-xl">Oppps.. kamu tidak memiliki akses!</Label>
          <Button onClick={handleProfile}>Back to Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoAccess;
