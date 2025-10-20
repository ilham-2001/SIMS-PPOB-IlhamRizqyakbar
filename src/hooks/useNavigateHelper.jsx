import { useNavigate } from 'react-router-dom';


const useNavigateHelper = () => {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return navigateToPage;
} 

export default useNavigateHelper;