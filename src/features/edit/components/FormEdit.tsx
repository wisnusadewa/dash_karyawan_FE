import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useAppSelector } from '@/features/auth/redux/hooks';
import { Spinner } from '@phosphor-icons/react';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useEdit from '../hooks/useEdit';

export interface DataSubmit {
  file: string;
  name: string | undefined;
}

const FormEdit = ({ data }: any) => {
  //   console.log('data passing from editComp', data);
  const { register, handleSubmit } = useForm<DataSubmit>({
    defaultValues: {
      name: undefined,
    },
  });
  const [disable, setDisable] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const { progress } = useAppSelector((state) => state.progress);

  const { editUserPersonal } = useEdit();

  //   Data Submit Form
  const onSubmit: SubmitHandler<DataSubmit> = (data) => {
    const dataUser = {
      file: data.file[0],
      name: data.name === '' ? undefined : data.name,
    };

    console.log('data submit?', dataUser);
    editUserPersonal.mutate(dataUser);
  };

  //   Handle Disable Edit
  const handleDisable = () => {
    setDisable(!disable);
  };

  //   HandleChangeInput
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //   console.log('input change?', e.target.files);
      setFile(e.target.files[0]);
    }
  };

  console.log('file?', file);

  //   Ambil image dan name
  const imageProfile = `${import.meta.env.VITE_API_BASE_URL}/${data?.user.employee.photo}`;
  const nameUser = data?.user.employee.name;
  //   console.log('nameUser?', nameUser);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full min-h-screen flex flex-col items-center gap-14">
        {/* AVATAR */}
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
          <div className="w-40 h-40">
            <Card className="rounded-full p-0">
              <Avatar className="h-full w-full">{imageProfile ? <AvatarImage src={imageProfile} alt="Profile" /> : <AvatarFallback>CN</AvatarFallback>}</Avatar>
            </Card>
          </div>

          <div onChange={handleChangeInput} className="w-full flex flex-col gap-2 justify-center items-center">
            <Input className=" shadow-neumorph cursor-pointer w-60 " type="file" {...register('file')} />
            {file && (
              <Card className="flex flex-col text-[10px] w-60">
                <p>filename : {file.name}</p>
                <p>filename : {file.size}</p>
                <p>filename : {file.type}</p>
              </Card>
            )}
          </div>
        </div>

        {/* EDIT NAME */}
        <div className="w-full">
          <div className="flex flex-col gap-2 justify-center items-center ">
            <Label htmlFor="name">Name : {nameUser}</Label>
            <div className="flex gap-2">
              <Input disabled={disable} type="name" placeholder="edit name here..." {...register('name')} />
              <Button className="bg-mainClr" type="button" onClick={handleDisable}>
                edit
              </Button>
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex flex-col gap-4 justify-center">
          <Button disabled={editUserPersonal.isPending} className="w-full bg-mainClr  tracking-widest" type="submit">
            {editUserPersonal.isPending ? <Spinner size={14} /> : 'submit'}
          </Button>

          <div>{editUserPersonal.isPending && <Progress value={progress} className="w-full" />}</div>
        </div>
      </div>
    </form>
  );
};

export default FormEdit;
