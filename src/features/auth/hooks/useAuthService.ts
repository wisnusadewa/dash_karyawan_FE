import axiosInstance from '@/api/axiosInstance';
import { AxiosError } from 'axios';
import { Bounce, toast } from 'react-toastify';
import { GetUserType } from './userType';

export interface userForm {
  email: string;
  password: string;
}

export interface ErrorResponse {
  message: string;
}

const useAuthService = () => {
  // REGISTER
  const registerUserService = async (data: userForm) => {
    try {
      const response = await axiosInstance.post('/register', data);
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

  const loginUserService = async (data: userForm) => {
    try {
      const response = await axiosInstance.post('/login', data);
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

  const getAllUserService = async () => {
    try {
      const response = await axiosInstance.get('/user');
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

  const getUserByIdService = async (id: number): Promise<GetUserType | undefined> => {
    try {
      const response = await axiosInstance.get<GetUserType>(`/user/${id}`);
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

  return { registerUserService, loginUserService, getAllUserService, getUserByIdService };
};

export default useAuthService;
