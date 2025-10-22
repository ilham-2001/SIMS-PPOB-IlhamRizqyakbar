import { useState } from 'react';

import { loginIllustration, logo } from '../assets/assets';

import CustomInput from '../components/CustomInput';
import Alert from '../components/Alert';

import { faAt, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import useNavigateHelper from '../hooks/useNavigateHelper';
import { validateInput } from '../utils/utils';

import { post } from '../utils/api';

const Registration = () => {
  const [ form, setForm ] = useState({email: '', first_name: '', last_name: '', password: '', confirm_password: ''});
  const [ isValid, setIsValid ] = useState(true);
  const [ alert, setAlert ] = useState({visible: false, type: '', message: ''});

  const { navigateToPage, _ } = useNavigateHelper();

  const setData = (inputData) => {
    const { name, value } = inputData;    
    
    form[name] = value;
    setForm({...form})
  }

  const onClickRegistration = async (e) => {    
    e.preventDefault();    

    if (form.confirm_password !== form.password) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    if (validateInput(form) && setIsValid) {
      try {
        const { confirm_password, ...payload } = form;
  
        const response = await post('/registration', payload)

        if (response.status >= 200) {
          setAlert({ visible: true, message: 'Berhasil terdaftar!', type: 'success' });
          setTimeout(() => setAlert({ visible: false, message: '', type: '' }), 3000);
          navigateToPage('/login')
        }
      } catch (err) {
        setAlert({ visible: true, message: 'Registrasi gagal!', type: 'error' });
        setTimeout(() => setAlert({ visible: false, message: '', type: '' }), 3000);
      }
    }
  }

  return (
    <main className='flex items-center'>
      {alert.visible? <Alert type={alert.type} message={alert.message}/>: ''}
      <div className='p-4 w-[60%] flex flex-col gap-4 justify-center'>
        <div className='flex flex-col gap-6 items-center'>
          <div className='flex gap-1 items-center'>
            <img src={logo} alt="Logo SIMS" />
            <p className='font-semibold text-[20px]'>SIMS PPOB</p>
          </div>
          <p className='font-semibold text-[24px] w-[300px] text-center'>Lengkapi data untuk membuat akun</p>
        </div>
        <form className='flex flex-col gap-6 items-center mt-8'>
          <CustomInput name="email" placeholder="masukan email anda" icon={faAt} type="email" sendData={setData}/>
          <CustomInput name="first_name" placeholder="name dapan" icon={faUser} type="email" sendData={setData}/>
          <CustomInput name="last_name" placeholder="nama belakang" icon={faUser} type="email" sendData={setData}/>
          <CustomInput name="password" placeholder="buat password" icon={faLock} type="password" sendData={setData}/>
          <CustomInput name="confirm_password" placeholder="konfirmasi password" icon={faLock} type="password" sendData={setData} isValid={isValid}/>

          <button className='bg-red-600 w-[50%] text-white font-medium px-6 py-3 rounded-md' onClick={onClickRegistration}>Registrasi</button>
        </form>
        <p className='text-center mt-4'>sudah punya akun? login <span className='text-red-600 font-medium cursor-pointer' onClick={() => navigateToPage('/login')}>di sini</span></p>
      </div>
      <div className='w-[40%]'>
        <img 
          className='w-full h-[100vh] object-center'
          src={loginIllustration} 
          alt="This is some side illustration" />
      </div>
    </main>
  )
}

export default Registration;


// test email
// johndoe@mail.com
// 12345678