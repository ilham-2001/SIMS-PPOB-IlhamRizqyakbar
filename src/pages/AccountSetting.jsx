import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

import { profile } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faUser, faPen } from '@fortawesome/free-solid-svg-icons';

const AccountSetting = () => {
  return (
    <main>
      <Header />
      <div className='container mx-auto flex flex-col gap-12 mt-8'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='relative'>
            <FontAwesomeIcon className='absolute bottom-0 right-0 border rounded-full p-1 bg-white cursor-pointer' icon={faPen}/>
            <img className='w-[120px]' src={profile} alt="profile image" />
          </div>
          <h3 className='font-medium text-[30px]'>Kristanto Wibowo</h3>
        </div>
        {/* user profile section */}
        <form className='flex flex-col gap-8 items-center'>
          <CustomInput icon={faAt} placeholder='wallet@nutech.com' label="Email"/>
          <CustomInput icon={faUser} placeholder='Kristanto' label="Nama Depan"/>
          <CustomInput icon={faUser} placeholder='Wibowo' label="Nama Belakang"/>

          <div className='flex flex-col gap-4 w-full items-center'>
            <button className='bg-red-600 w-[50%] text-white font-medium px-6 py-3 rounded-md'>Edit Profil</button>          
            <button className='w-[50%] text-red-600 border border-red-600 font-medium px-6 py-3 rounded-md'>Logout</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AccountSetting;