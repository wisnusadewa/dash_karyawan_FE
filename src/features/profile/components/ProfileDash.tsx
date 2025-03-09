import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import useSideBar from '@/features/Sidebar/hooks/useSideBar';
import { CurrencyRupiah } from '@/utils/CurrencyRupiah';
import { FilePdf } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const ProfileDash = () => {
  const { getMe } = useSideBar();

  const { data: itsMe } = getMe();
  console.log('get me profile', itsMe);

  // WAKTU SAAT INI
  const datetime = itsMe?.user.employee.joinDate;
  const dateOnly = datetime?.slice(0, 10);

  const ImageProfile = `${import.meta.env.VITE_API_BASE_URL}/${itsMe?.user.employee.photo}`;
  const PdfProfile = `${import.meta.env.VITE_API_BASE_URL}/${itsMe?.user.document[0].filePath}`;
  // console.log('image?', ImageProfile);
  console.log('pdf?', PdfProfile);

  return (
    <div className="flex flex-col h-full w-full p-5 shadow-neumorph rounded-[15px] gap-2 lg:gap-10 overflow-hidden text-[12px]">
      <div className="flex flex-col gap-14 h-full w-full justify-center">
        <div className="flex justify-center">
          <Card className="w-48 h-14 items-center justify-center text-center">Salary: {CurrencyRupiah(itsMe?.user.employee.salaryPerMonth)}</Card>
        </div>

        <div className="flex justify-around">
          <Card className="w-44 h-14 items-center justify-center text-center">{itsMe?.user.employee.job?.title}</Card>
          <Card className="w-44 h-14 items-center justify-center text-center">{itsMe?.user.employee.job?.description} </Card>
        </div>

        <div className="flex items-center justify-between">
          <Card className="w-28 h-14 items-center justify-center text-center">role: {itsMe?.user.role} </Card>
          <Card className="w-40 h-40 rounded-full items-center justify-center text-center p-0 bg-red-200">
            {/* BELUM ADA ENDPOINT BE */}
            <Avatar className="h-full w-full">{ImageProfile ? <AvatarImage src={ImageProfile} alt="Profile" /> : <AvatarFallback>CN</AvatarFallback>}</Avatar>
          </Card>
          <Card className="w-28 h-14 items-center justify-center text-center">status: {itsMe?.user.employee.status}</Card>
        </div>

        <div className="flex justify-around">
          <Card className="w-44 h-14 items-center justify-center text-center">Join_date : {dateOnly}</Card>
          <Card className="w-44 h-14 items-center justify-center text-center">workdays : {itsMe?.user.employee.totalWorkDays}</Card>
        </div>

        <div className="flex justify-center">
          <Link to={PdfProfile}>
            <Card className="w-48 h-14 items-center justify-center text-center bg-transparent tracking-wider">
              <div className="flex h-full w-full justify-center items-center gap-2">
                <Label>Cek File</Label>
                <FilePdf size={20} />
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDash;
