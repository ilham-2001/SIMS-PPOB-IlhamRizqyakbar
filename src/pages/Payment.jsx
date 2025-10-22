import MainCard from '../components/MainCard'
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

import useNavigateHelper from '../hooks/useNavigateHelper';

import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
  const { navigateToPage, _, state } = useNavigateHelper()
  
  return (
    <main>
      <Header />
      <div className='container mx-auto flex flex-col gap-12 mt-8'>
        <MainCard />
        <PaymentForm data={state}/>
      </div>
    </main>
  )
}

const PaymentForm = ({ data }) => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <h4>Pembayaran</h4>
        <div className='flex gap-1 items-center'>
          <img className='w-[36px]' src={data.service_icon} alt="icon payment" />
          <p className='font-medium text-[20px]'>{data.service_name}</p>
        </div>
      </div>
      <form className='flex flex-col gap-2 mt-4'>
          <CustomInput name="amount" value={data.service_tariff} icon={faMoneyBill} classNames="w-[100%]"/>
          <button className='bg-red-600 w-[100%] text-white font-medium px-6 py-3 rounded-md'>Bayar</button>
      </form>
      
    </div>
  )
}

export default Payment;