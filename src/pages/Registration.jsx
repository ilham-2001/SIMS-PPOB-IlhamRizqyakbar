import { loginIllustration, logo } from '../assets/assets';

import CustomInput from '../components/CustomInput';
import { faAt, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import useNavigateHelper from '../hooks/useNavigateHelper';

const Registration = () => {
    const navigateToPage = useNavigateHelper();

  return (
    <main className='flex items-center'>
      <div className='p-4 w-[60%] flex flex-col gap-4 justify-center'>
        <div className='flex flex-col gap-6 items-center'>
          <div className='flex gap-1 items-center'>
            <img src={logo} alt="Logo SIMS" />
            <p className='font-semibold text-[20px]'>SIMS PPOB</p>
          </div>
          <p className='font-semibold text-[24px] w-[300px] text-center'>Lengkapi data untuk membuat akun</p>
        </div>
        <form className='flex flex-col gap-6 items-center mt-8'>
          <CustomInput placeholder="masukan email anda" icon={faAt} type="email"/>
          <CustomInput placeholder="name dapan" icon={faUser} type="email"/>
          <CustomInput placeholder="nama belakang" icon={faUser} type="email"/>
          <CustomInput placeholder="buat password" icon={faLock} type="password"/>
          <CustomInput placeholder="konfirmasi password" icon={faLock} type="password"/>

          <button className='bg-red-600 w-[50%] text-white font-medium px-6 py-3 rounded-md'>Masuk</button>
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