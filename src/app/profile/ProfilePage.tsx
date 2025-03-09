import ProfileDash from '@/features/profile/components/ProfileDash';
import SideBar from '@/features/Sidebar/components/SideBar';
import LayoutDash from '@/layout/LayoutDash';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const profilePage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  // console.log('accessToken profile', accessToken);

  useEffect(() => {
    if (!accessToken) navigate('/login');
  }, [accessToken]);

  return (
    <>
      {accessToken && (
        <div>
          <LayoutDash>
            <SideBar />
            <ProfileDash />
          </LayoutDash>
        </div>
      )}
    </>
  );
};

export default profilePage;
