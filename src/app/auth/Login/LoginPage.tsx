import LoginForm from '@/features/auth/components/LoginForm';
import LayoutAuth from '../Layout/LayoutAuth';

const AuthPage = () => {
  return (
    <LayoutAuth>
      <main>
        <LoginForm />
      </main>
    </LayoutAuth>
  );
};

export default AuthPage;
