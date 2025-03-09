import ContainerDash from '@/features/dashboard/components/ContainerDash';
import SideBar from '@/features/Sidebar/components/SideBar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutDash from '../../layout/LayoutDash';

const DashboardPage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  // jika user belum login dan menuju dashboard maka diarahkan ke login page
  useEffect(() => {
    if (!accessToken) navigate('/login');
  }, []);

  // console.log('accessToken dashboard? :', accessToken);

  console.log('user di dashboard page:', user);

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
