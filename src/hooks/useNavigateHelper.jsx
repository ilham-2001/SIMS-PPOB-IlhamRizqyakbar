import { useNavigate, useLocation } from 'react-router-dom';


const useNavigateHelper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return {
    navigateToPage,
    currentPath: location.pathname
  };
} 

export default useNavigateHelper;