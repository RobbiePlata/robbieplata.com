import { useEffect } from 'react';
import { useNavigate as useNav, useLocation } from 'react-router-dom';

export const useNavigate = () => {
  const history = useNav();
  const { pathname } = useLocation();
  
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  
  return ({ pathname, state = {}, callback = () => null }) => {
    history.push(pathname, state);
    callback();
  };
};