import { useState } from 'react';

import { loginIllustration, logo } from '../assets/assets';

import CustomInput from '../components/CustomInput';
import { faAt, faLock} from '@fortawesome/free-solid-svg-icons';

import useNavigateHelper from '../hooks/useNavigateHelper';

import { post } from '../utils/api';

const Login = () => {
  const [ form, setForm ] = useState({email: '', password: ''})
  const [ isValid, setIsValid ] = useState(true);

  const { navigateToPage, _ } = useNavigateHelper();

  const setData = (inputData) => {
    const { name, value } = inputData;

    form[name] = value;
    setForm({...form});
  }

  const onClickedLogin = async (e) => {
    e.preventDefault();
    
    const response = await post('/login', form);
    console.log(response);
    
  }

  return (
    <main className='flex items-center'>
      <div className='p-4 w-[60%] flex flex-col gap-4 justify-center'>
        <div className='flex flex-col gap-6 items-center'>
          <div className='flex gap-1 items-center'>
            <img src={logo} alt="Logo SIMS" />
            <p className='font-semibold text-[20px]'>SIMS PPOB</p>
          </div>
          <p className='font-semibold text-[24px] w-[300px] text-center'>Masuk atau buat akun untuk memulai</p>
        </div>
        <form className='flex flex-col gap-6 items-center mt-8'>
          <CustomInput name="email" placeholder="masukan email anda" icon={faAt} type="email" sendData={setData}/>
          <CustomInput name="password" placeholder="masukan password anda" icon={faLock} type="password" sendData={setData} isValid={isValid}/>

          <button className='bg-red-600 w-[50%] text-white font-medium px-6 py-3 rounded-md' onClick={onClickedLogin}>Masuk</button>
        </form>
        <p className='text-center mt-4'>belum punya akun? registrasi <span className='text-red-600 font-medium cursor-pointer' onClick={() => navigateToPage('/registration')}>di sini</span></p>
      </div>
      <div className='w-[40%]'>
        <img 
          className='w-full h-[100vh] object-center'
          src={loginIllustration} 
          alt="This is some side illustration" />
      </div>
    </main>
  )
};

export default Login;