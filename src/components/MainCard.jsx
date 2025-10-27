import { useEffect, useState } from 'react';

import { profile, bgSaldo } from '../assets/assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

import { get } from '../utils/api';

const MainCard = () => {
  const [ userProfile, setUserProfile ] = useState(null);

  const getProfileData = async () => {
    const profile = await get('/profile', true);
    const profileData = profile.data.data;

    setUserProfile({ ...profileData, full_name: `${profileData.first_name} ${profileData.last_name}`});
  }

  useEffect(() => {
    getProfileData();

  }, [])

  return (
    <main className='flex justify-between'>
      <div className='flex flex-col gap-4'>
        <img className='max-w-[64px]' src={userProfile?.profile_image} alt="profile image" />
        <div className='flex flex-col gap-1'>
          <p>Selamat datang,</p>
          <h3 className='font-medium text-[32px] leading-none'>{userProfile?.full_name}</h3>
        </div>
      </div>
      <div>
        <BalanceCard />
      </div>
    </main>
  )
}

export default MainCard;

const BalanceCard = () => {
  const [ hide, setHide ] = useState(true);
  const [ balance, setBalance ] = useState(0);

  const getBalance = async () => {
    const balance = await get('/balance', true);

    setBalance(balance.data.data.balance);
  }

  useEffect(() => {
    getBalance();
  }, []);

  const toggleHide = () => {
    setHide(!hide);
  }

  const cardStyle = {
    backgroundImage : `url(${bgSaldo})`,
    backgroundPosition: 'center center'
  }
  return (
    <div className='rounded-lg px-4 py-6 text-white w-[670px]' style={cardStyle}>
      <p>Saldo anda</p>
      <p className='text-[32px]'>Rp {hide? "*".repeat(6): <span>{balance}</span>}</p>
      <div className='flex gap-2 items-center text-[12px] mt-3'>
        <p>Lihat saldo anda</p>
          <FontAwesomeIcon className='cursor-pointer text-[10px]' onClick={toggleHide} icon={hide? faEye: faEyeSlash}/>
      </div>
    </div>
  )
}