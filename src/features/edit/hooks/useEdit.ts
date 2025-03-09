import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import useEditService from './useEditService';

const useEdit = () => {
  const { editUserPersonalService } = useEditService();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const editUserPersonal = useMutation({
    mutationKey: ['users'],
    mutationFn: editUserPersonalService,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ['users'] });
        navigate('/profile');
        console.log('data edit user?', data);
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

  return { editUserPersonal };
};

export default useEdit;
