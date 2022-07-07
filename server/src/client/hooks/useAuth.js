import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    console.log('USER', user);
    if (!user) {
      navigate('/');
    }
  }, [navigate, user]);

  return { user };
};

export default useAuth;
