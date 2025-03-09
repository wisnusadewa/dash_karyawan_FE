import ContainerDash from '@/features/dashboard/components/ContainerDash';
import SideBar from '@/features/Sidebar/components/SideBar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutDash from '../../layout/LayoutDash';

const DashboardPage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const userString = localStorage.getItem('user');
  const navigate = useNavigate();

  // Parse user dari localStorage jika ada, jika tidak, gunakan null
  const user = userString ? JSON.parse(userString) : null;

  // jika user belum login dan menuju dashboard maka diarahkan ke login page
  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else if (user?.role === 'USER') {
      navigate('/profile');
    }
  }, [user, accessToken, navigate]);

  // console.log('accessToken dashboard? :', accessToken);

  console.log('user di dashboard page:', user?.role);

  return (
    <>
      {accessToken && (
        <LayoutDash>
          <SideBar />
          <ContainerDash />
        </LayoutDash>
      )}
    </>
  );
};

export default DashboardPage;
