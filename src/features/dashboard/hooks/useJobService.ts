import axiosInstance from '@/api/axiosInstance';
import { AxiosError } from 'axios';
import { Bounce, toast } from 'react-toastify';

interface ErrorResponse {
  message: string;
}
const useJobService = () => {
  const getAllJobService = async () => {
    try {
      const response = await axiosInstance.get('/job');
      return response.data;
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      // console.log('error apasih?', err); // Cek apakah message benar-benar ada di sini
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
  return { getAllJobService };
};

export default useJobService;
