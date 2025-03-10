import SideBar from '@/features/Sidebar/components/SideBar';
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
