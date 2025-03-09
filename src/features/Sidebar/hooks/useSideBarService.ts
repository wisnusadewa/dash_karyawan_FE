import axiosInstance from '@/api/axiosInstance';
import { AxiosError } from 'axios';
import { Bounce, toast } from 'react-toastify';

interface ErrorResponse {
  message: string;
}

const useSideBarService = () => {
  // GET DATA UNTUK PROFILE
  const getMeService = async () => {
    try {
      const response = await axiosInstance.get('/me');
      return response.data;
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      if (err.response) {
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

  // Logout User
  const logoutUserService = async () => {
    try {
      const response = await axiosInstance.post('/logout');
      return response.data;
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      if (err.response) {
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

  return { getMeService, logoutUserService };
};

export default useSideBarService;
