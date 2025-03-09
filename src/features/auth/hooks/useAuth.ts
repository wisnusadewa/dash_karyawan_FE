import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { loginUserRedux } from '../redux/authSlice';
import { useAppDispatch } from '../redux/hooks';
import useAuthService from './useAuthService';
import { GetUserType } from './userType';

const useAuth = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { registerUserService, loginUserService, getAllUserService, getUserByIdService } = useAuthService();

  //   QUERY REGISTER
  const registerUser = useMutation({
    mutationKey: ['users'],
    mutationFn: registerUserService,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ['users'] });
        console.log('data.message succes query', data.message);
        navigate('/login');
        toast(data.message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    },
    onError: (err) => {
      console.error('failed register on query', err.message);
    },
  });

  const loginUser = useMutation({
    mutationKey: ['users'],
    mutationFn: loginUserService,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ['users'] });
        console.log('accesstoken setelah login user: ', data);
        dispatch(loginUserRedux({ accessToken: data.accessToken, user: data.user }));
        navigate('/profile');
        console.log('data query login?', data.accessToken);
        toast(data.message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    },
    onError: (err) => {
      console.error('failed register on query', err);
    },
  });

  const getAllUser = () => {
    return useQuery({
      queryKey: ['users'],
      queryFn: getAllUserService,
      retry: false,
    });
  };

  const getUserById = (id: number) => {
    return useQuery<GetUserType | undefined, Error>({
      queryKey: ['user', id],
      queryFn: () => getUserByIdService(id),
      retry: false,
      enabled: !!id,
    });
  };

  return { registerUser, loginUser, getAllUser, getUserById };
};

export default useAuth;
