import MainCard from '../components/MainCard'
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
  return (
    <main>
      <Header />
      <div className='container mx-auto flex flex-col gap-12 mt-8'>
        <MainCard />
        <PaymentForm />
      </div>
    </main>
  )
}

const PaymentForm = ({ paymentType, icon, tariff, code }) => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <h4>Pembayaran</h4>
        <div className='flex gap-1'>
          <img src={icon} alt="icon payment" />
          <p>{paymentType}</p>
        </div>
      </div>
      <form className='flex flex-col gap-2'>
          <CustomInput name="amount" icon={faMoneyBill} classNames="w-[100%]"/>
          <button className='bg-red-600 w-[100%] text-white font-medium px-6 py-3 rounded-md'>Bayar</button>
      </form>
      
    </div>
  )
}

export default Payment;