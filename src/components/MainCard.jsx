import { useState } from 'react';

import { profile, bgSaldo } from '../assets/assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


const MainCard = () => {
  return (
    <main className='flex justify-between'>
      <div className='flex flex-col gap-4'>
        <img className='max-w-[64px]' src={profile} alt="profile image" />
        <div className='flex flex-col gap-1'>
          <p>Selamat datang,</p>
          <h3 className='font-medium text-[32px] leading-none'>Kristanto Wibowo</h3>
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
      <p className='text-[32px]'>Rp <span>- - - -</span></p>
      <div className='flex gap-2 items-center text-[12px] mt-3'>
        <p>Lihat saldo anda</p>
          <FontAwesomeIcon className='cursor-pointer text-[10px]' onClick={toggleHide} icon={hide? faEye: faEyeSlash}/>
      </div>
    </div>
  )
}