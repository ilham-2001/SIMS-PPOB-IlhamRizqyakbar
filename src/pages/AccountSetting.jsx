import Header from '../components/Header';
import CustomInput from '../components/CustomInput';
import Alert from '../components/Alert';

import { profile } from '../assets/assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faUser, faPen } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import useNavigateHelper from '../hooks/useNavigateHelper';

import { logout } from '../slices/authSlice';

import { get, put } from '../utils/api';
import { useEffect, useState } from 'react';

const AccountSetting = () => {
  const [ form, setForm ] = useState({ first_name: '', last_name: '' });
  const [ user, setUser ] = useState(null);
  const [isEdit, setIsEdit ] = useState(false);
  const [ alert, setAlert ] = useState({visible: false, type: '', message: ''});

  const dispatch = useDispatch();
  const { navigateToPage } = useNavigateHelper();

  const getUserData = async () => {
    const user = await get('/profile', true);
    
    setForm({ first_name: user.data.data.first_name, last_name: user.data.data.last_name });
    setUser(user.data.data)
  }

  const setData = (inputData) => {
    const { name, value } = inputData;    
    
    form[name] = value;
    setForm({...form})
  }

  useEffect(() => {
    getUserData();
  }, [])
  
  const onLogOutClicked = (e) => {
    e.preventDefault();

    localStorage.removeItem('session');
    dispatch(logout())
    navigateToPage('/login');
  }

  const onClickedEditProfile = async (e) => {
    e.preventDefault();

    setIsEdit(true);
  }

  const onClickedSaveChanges = async (e) => {
    e.preventDefault();

    try {
      const response = await put('/profile/update', form, true);
      
      setAlert({ visible: true, message: `Berhasil melakukan perubahan!`, type: 'success' });
      setIsEdit(false);
      setTimeout(() => {
        setAlert({ visible: false, message: '', type: '' });
        navigateToPage('/account');
      }, 3000);

      } catch (err) {        
        setAlert({ visible: true, message: `Gagal melakukan perubahan!`, type: 'error' });
        setTimeout(() => setAlert({ visible: false, message: '', type: '' }), 3000);
      }
  }

  return (
    <main>
      <Header />
      <div className='container mx-auto flex flex-col gap-12 mt-8'>
        {alert.visible? <Alert type={alert.type} message={alert.message}/>: ''}
        <div className='flex flex-col gap-2 items-center'>
          <div className='relative'>
            <FontAwesomeIcon className='absolute bottom-0 right-0 border rounded-full p-1 bg-white cursor-pointer' icon={faPen}/>
            <img className='w-[120px]' src={user?.profile_image} alt="profile image" />
          </div>
          <h3 className='font-medium text-[30px]'>{`${user?.first_name} ${user?.last_name}`}</h3>
        </div>
        {/* user profile section */}
        <form className='flex flex-col gap-8 items-center'>
          <CustomInput name="email" value={user?.email} icon={faAt} placeholder='wallet@nutech.com' label="Email" readOnly={true}/>
          <CustomInput name="first_name" value={user?.first_name} icon={faUser} placeholder='Kristanto' label="Nama Depan" readOnly={!isEdit} sendData={setData}/>
          <CustomInput name="last_name" value={user?.last_name} icon={faUser} placeholder='Wibowo' label="Nama Belakang" readOnly={!isEdit} sendData={setData}/>

          <div className='flex flex-col gap-4 w-full items-center'>
            {isEdit? <button className='bg-red-600 w-[50%] text-white font-medium px-6 py-3 rounded-md' onClick={onClickedSaveChanges}>Simpan</button>: "" }
            {isEdit? "": <button className='bg-red-600 w-[50%] text-white font-medium px-6 py-3 rounded-md' onClick={onClickedEditProfile}>Edit Profil</button> }           
            {isEdit? "": <button className='w-[50%] text-red-600 border border-red-600 font-medium px-6 py-3 rounded-md' onClick={onLogOutClicked}>Logout</button> }
          </div>
        </form>
      </div>
    </main>
  )
}

export default AccountSetting;