import axiosInstance from '@/api/axiosInstance';
import { ErrorResponse } from '@/features/auth/hooks/userType';
import { useAppDispatch } from '@/features/auth/redux/hooks';
import { progress } from '@/reduxStore/progressSlice';
import { AxiosError } from 'axios';
import { Bounce, toast } from 'react-toastify';
import { DataSubmit } from '../components/FormEdit';

const useEditService = () => {
  const dispatch = useAppDispatch();

  const editUserPersonalService = async (data: DataSubmit) => {
    console.log('data di edit service: ', data);
    try {
      const response = await axiosInstance.put('/editUserPersonal', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const uploadProgress = progressEvent.total ? Math.round((progressEvent.loaded * 100) / progressEvent.total) : 0;
          dispatch(progress(uploadProgress));
        },
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      // console.log('error apasih?', err); // Cek apakah message benar-benar ada di sini
      if (err.response) {
        dispatch(progress(0));
        toast.error(err.response.data.message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Bounce,
        });
      }
    }
  };
  return { editUserPersonalService };
};

export default useEditService;
