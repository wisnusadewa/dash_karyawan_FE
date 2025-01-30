import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, { message: 'Password min. 6 character' }).max(12),
  name: z.string(),
});

type UserForm = z.infer<typeof UserSchema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: UserForm) => {
    const result = UserSchema.safeParse(data);
    console.log(result);
    if (result.success) {
      // Mutate Data
      console.log(data);
      reset();
    } else {
      return;
    }
  };

  return (
    <div className="shadow-neumorph rounded-[50px] w-[320px] h-[550px]">
      <form className=" p-[20px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <div className="flex">
            <Label className="text-2xl text-center w-full" htmlFor="">
              Register Form
            </Label>
          </div>

          {/* NAME */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" placeholder="Name" {...register('name')} />
            {errors.name && <p style={{ color: 'red', fontSize: '14px' }}>{errors.name.message}</p>}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" {...register('email')} />
            {errors.email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.email.message}</p>}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Password</Label>
            <Input type="password" placeholder="Password" {...register('password')} />
            {errors.password && <p style={{ color: 'red', fontSize: '14px' }}>{errors.password.message}</p>}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center">
            <Button className="w-full bg-[#34c1e5] tracking-widest" type="submit">
              Register
            </Button>
          </div>
        </div>
      </form>
      {/* NAVIGATE */}
      <div className="flex h-10 gap-2 text-[14px] justify-center items-center tracking-wider">
        <p>Sudah memiliki account?</p>
        <Button onClick={() => navigate('/login')} className="py-0">
          Login
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
