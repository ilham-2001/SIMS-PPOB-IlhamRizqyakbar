import { useNavigate, useLocation } from 'react-router-dom';


const useNavigateHelper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPage = (path, data={}) => {
    navigate(path, { state: data });
  };

  return {
    navigateToPage,
    currentPath: location.pathname,
    state: location.state
  };
} 

export default useNavigateHelper;