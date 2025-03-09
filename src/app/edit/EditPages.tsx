import EditComp from '@/features/edit/components/EditComp';
import SideBar from '@/features/Sidebar/components/SideBar';
import LayoutDash from '@/layout/LayoutDash';

const EditPages = () => {
  return (
    <LayoutDash>
      <SideBar />
      <EditComp />
    </LayoutDash>
  );
};

export default EditPages;
