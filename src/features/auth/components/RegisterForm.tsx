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
  cpassword: z.string().min(6, { message: 'Password min. 6 character' }).max(12),
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
  const { registerUser } = useAuth();

  const onSubmit = (data: UserForm) => {
    const result = UserSchema.safeParse(data);
    // console.log('result?', result);
    if (result.success) {
      // Mutate Data
      registerUser.mutate(data);
      // console.log('data?', data);
      reset();
    } else {
      return;
    }
  };

  return (
    <div className="shadow-neumorph rounded-[20px] w-[320px] h-[550px]">
      <form className=" p-[20px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <div className="flex">
            <Label className="text-2xl text-center w-full" htmlFor="">
              Register Form
            </Label>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" {...register('email')} />
            {errors.email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.email.message}</p>}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" {...register('password')} />
            {errors.password && <p style={{ color: 'red', fontSize: '14px' }}>{errors.password.message}</p>}
          </div>

          {/* CPASSWORD */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Confirm Password</Label>
            <Input type="password" placeholder="Password" {...register('cpassword')} />
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
