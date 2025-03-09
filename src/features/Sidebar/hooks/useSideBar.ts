import { logoutUserRedux } from '@/features/auth/redux/authSlice';
import { useAppDispatch } from '@/features/auth/redux/hooks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';
import useSideBarService from './useSideBarService';

const useSideBar = () => {
  const { getMeService, logoutUserService } = useSideBarService();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const getMe = () => {
    return useQuery({
      queryKey: ['users'],
      queryFn: getMeService,
      retry: false,
    });
  };

  const logoutUser = useMutation({
    mutationKey: ['users'],
    mutationFn: logoutUserService,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ['users'] });
        dispatch(logoutUserRedux());
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
  });

  return { getMe, logoutUser };
};

export default useSideBar;
