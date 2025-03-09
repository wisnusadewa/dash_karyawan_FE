import Navbar from '@/components/Navbar/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Gear, SignOut } from '@phosphor-icons/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useSideBar from '../hooks/useSideBar';

const SideBar: React.FC = () => {
  // GET CURRENT USER
  const { getMe, logoutUser } = useSideBar();
  const { data: currentUser, isLoading, error } = getMe();
  // console.log('currentUser ?', currentUser?.user.role);

  const ADMIN = currentUser?.user.role === 'ADMIN';

  // Slice Logout
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser.mutate();
    navigate('/login');
  };

  // Validasi
  if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>{error.message}</p>;

  // HandleEdit navigate
  const handleEdit = () => {
    navigate(`/edit/${currentUser?.user.id}`);
  };

  // image
  const ImageProfile = `${import.meta.env.VITE_API_BASE_URL}/${currentUser?.user.employee.photo}`;

  return (
    <div className="shadow-neumorph rounded-[15px] flex flex-col items-center h-full w-1/4 py-5 px-5 gap-20">
      {/* PROFILE */}
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full shadow-neumorph ">
          <Avatar>
            <AvatarImage src={ImageProfile} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <Label>{currentUser?.user.employee.name}</Label>
        <Label>{currentUser?.user.email}</Label>

        <div className="bg-card_neo">
          <Button onClick={handleEdit}>
            <Gear size={26} />
          </Button>
        </div>
      </div>

      {/* LIST */}
      <div>
        <Navbar ADMIN={ADMIN} />
      </div>

      {/* LOGOUT */}
      <div className="flex items-end w-full h-full">
        <Button onClick={handleLogout} className="w-full bg-red-300">
          <SignOut size={32} />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
