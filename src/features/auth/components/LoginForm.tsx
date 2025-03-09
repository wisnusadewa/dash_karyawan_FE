import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import useAuth from '../hooks/useAuth';

const UserSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, { message: 'Password min. 6 character' }).max(12),
});

type UserForm = z.infer<typeof UserSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserSchema),
  });

  const navigate = useNavigate();

  // QUERY
  const { loginUser } = useAuth();

  const onSubmit = (data: UserForm) => {
    const result = UserSchema.safeParse(data);
    console.log(result);
    if (result.success) {
      // Mutate Data
      loginUser.mutate(data);
      // console.log(data);
      reset();
    } else {
      return;
    }
  };

  return (
    <div className="shadow-neumorph rounded-[20px] w-[320px] h-[450px] ">
      <form className="p-[20px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <div className="flex">
            <Label className="text-2xl text-center w-full" htmlFor="">
              Login Form
            </Label>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" {...register('email')} />
            {errors.email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" {...register('password')} />
            {errors.password && <p style={{ color: 'red', fontSize: '14px' }}>{errors.password.message}</p>}
          </div>

          <div className="flex justify-center">
            <Button className="w-full bg-[#34c1e5] tracking-widest" type="submit">
              Login
            </Button>
          </div>
        </div>
      </form>
      {/* NAVIGATE */}
      <div className="flex h-10 gap-2 text-[14px] justify-center items-center tracking-wider">
        <p>Belum memiliki account?</p>
        <Button onClick={() => navigate('/register')} className="py-0">
          Register
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
