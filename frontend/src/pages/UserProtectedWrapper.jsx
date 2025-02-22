import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/api/users/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response.status === 200) {
        setUser(response.data);
        setIsLoading(false);
      }
    })
    .catch(err => {
      console.error("Auth check failed:", err);
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, [token]);

  if (isLoading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default UserProtectedWrapper;
