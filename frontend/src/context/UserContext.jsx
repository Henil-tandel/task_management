import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/me`, { withCredentials: true });
        setUser(res.data.user);
      } catch (error) {
        setUser(null);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const logout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/api/users/logout`, { withCredentials: true });
      setUser(null);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>;
};
