import { loginUserRedux, logoutUserRedux } from '@/features/auth/redux/authSlice';
import { store } from '@/reduxStore/store';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, // Sesuaikan dengan URL API
  // Jika menggunakan refresh token berbasis cookie
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    console.log('state axios instance:', state);
    const token = state.auth.accessToken;
    console.log('Stored Token axiosInstance request:', token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 🔹 Interceptor untuk response (refresh token)

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    // ._retry hanyalah penamaan, ._retry itu adalah error diluar axios

    //
    if (error.response?.status === 401 || (error.response?.status === 403 && !error.config._retry)) {
      // menjadi true agar menghentikan request jika error diluar axios
      error.config._retry = true;
      try {
        // fetch refresh token
        const response = await axiosInstance.post('/refresh');

        // Ambil refresh token dan masukkan ke dalam newAccessToken
        const newAccessToken = response.data.accessToken;

        // Masukkan ke dalam redux
        store.dispatch(loginUserRedux({ accessToken: newAccessToken }));

        // lakukan request kembali
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(error.config);
      } catch (err) {
        store.dispatch(logoutUserRedux()); // Logout jika refresh token gagal
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
