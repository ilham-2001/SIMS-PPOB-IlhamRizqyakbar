import Header from '../components/Header';
import MainCard from '../components/MainCard';

import '../assets/css/home.css'

import useNavigateHelper from '../hooks/useNavigateHelper';

import { useSelector } from 'react-redux';

import { get } from '../utils/api';

import { useEffect, useState } from 'react';

const Home = () => {
  const [ profile, setProfile ] = useState(null);

  const { navigateToPage, _ } = useNavigateHelper()
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {    
    // TODO: problem when token is not available but somehow the api still get called on main
    if (!token) {
      navigateToPage('/login');
    }
  }, []);

  return (
    <main>
      <Header />

      <div className='container mx-auto flex flex-col gap-12 mt-8'>
        <MainCard />
        <ServicesList />
        <BannerList />
      </div>
    </main>
  )
}

export default Home;


const ServicesList = () => {
  const [ services, setServices ] = useState([]);

  const { navigateToPage } = useNavigateHelper();

  const toPaymentPage = () => {
    navigateToPage('/payment');
  }

  const getServicesData = async () => {
    const services = await get('/services', true);

    setServices(services.data.data);
  }

  useEffect(() => {
    getServicesData();
  }, [])

  return (
    <div className='flex justify-between'>
      {services.map((it, index) => {
        return (
          <div 
            className='flex text-center flex-col gap-1 cursor-pointer max-w-[70px] max-h-[70px]' 
            key={it.service_code}
            onClick={() => toPaymentPage()}
            >
            <img src={it.service_icon} alt={it.service_name} />
            <p className='text-[12px]'>{it.service_name}</p>
          </div>
        )
      })}
    </div>
  )
}

const BannerList = () => {
  const [ banners, setBanners ] = useState([]);

  const getBannerData = async () => {
    const banners = await get('/banner');
    
    setBanners(banners.data.data);
  }

  useEffect(() => {    
    getBannerData();
  }, [])

  return (
    <div className='flex flex-col gap-2 mt-6'>
      <p className='font-medium'>Temukan Promo menarik</p>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {banners.map((it, index) => (
          <img
            key={index}
            src={it.banner_image}
            alt={it.name}
            className="flex-shrink-0 w-[270px] h-auto rounded-lg object-cover cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}