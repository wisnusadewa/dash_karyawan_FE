import useSideBar from '@/features/Sidebar/hooks/useSideBar';
import FormEdit from './FormEdit';

// type IdState = {
//   id: string | undefined;
// };

const EditComp = () => {
  const { getMe } = useSideBar();

  const { data } = getMe();
  //   console.log('data user ', data);

  //   HIT API editUserPersonal

  return (
    <div className="flex flex-col h-full w-full p-5 shadow-neumorph rounded-[15px] gap-2 lg:gap-10 overflow-hidden">
      {/*  EDIT FORM*/}
      <FormEdit data={data} />

      <div></div>
    </div>
  );
};

export default EditComp;
