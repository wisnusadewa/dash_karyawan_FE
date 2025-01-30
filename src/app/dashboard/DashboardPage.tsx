import ContainerDash from '@/features/dashboard/components/ContainerDash';
import SideBar from '@/components/Sidebar/SideBar';
import LayoutDash from '../../layout/LayoutDash';

const DashboardPage = () => {
  return (
    <LayoutDash>
      <SideBar />
      <ContainerDash />
    </LayoutDash>
  );
};

export default DashboardPage;
