import SideBar from '@/components/Sidebar/SideBar';
import EmployeeDash from '@/features/employees/components/EmployeeDash';
import LayoutDash from '@/layout/LayoutDash';

const EmployeesPage = () => {
  return (
    <LayoutDash>
      <SideBar />
      <EmployeeDash />
    </LayoutDash>
  );
};

export default EmployeesPage;
