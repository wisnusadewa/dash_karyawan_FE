import RegisterForm from '@/features/auth/components/RegisterForm';
import LayoutAuth from '../Layout/LayoutAuth';

const AuthPage = () => {
  return (
    <LayoutAuth>
      <main>
        <RegisterForm />
      </main>
    </LayoutAuth>
  );
};

export default AuthPage;
