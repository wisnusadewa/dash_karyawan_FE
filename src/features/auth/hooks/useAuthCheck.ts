// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAppSelector } from '../redux/hooks';

// export const useAuthCheck = () => {
//   const accessToken = useAppSelector((state) => state.auth.accessToken);
//   const navigate = useNavigate();

//   console.log('accessToken', accessToken);

//   useEffect(() => {
//     if (!accessToken) {
//       navigate('/login', { replace: true });
//     }
//   }, [navigate, accessToken]);
// };
