import Header from '../components/Header';
import MainCard from '../components/MainCard';

import CustomInput from '../components/CustomInput';
import Alert from '../components/Alert';

import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import { post } from '../utils/api';
import useNavigateHelper from '../hooks/useNavigateHelper';

import { useState } from 'react';

const TopUp = () => {
  return (
    <div>
      <Header />
        <div className='container mx-auto flex flex-col gap-12 mt-8'>
          <MainCard />
          <TopUpForm />
      </div>
    </div>
  )
} 

export default TopUp;


const optionalAmount = [
  {
    id: 1,
    name: 'Rp10.0000',
    amount: 10_000,
  },
  {
    id: 2,
    name: 'Rp20.0000',
    amount: 20_000,
  },
  {
    id: 3,
    name: 'Rp50.0000',
    amount: 50_000,
  },
  {
    id: 4,
    name: 'Rp100.0000',
    amount: 100_000,
  },
  {
    id: 5,
    name: 'Rp250.0000',
    amount: 250_000,
  },
  {
    id: 6,
    name: 'Rp500.0000',
    amount: 500_000,
  },
]


const TopUpForm = () => {
  const [amount, setAmount ] = useState(0);
  const [ alert, setAlert ] = useState(false);

  const { navigateToPage, _, state } = useNavigateHelper();

  const setData = (inputData) => {    
    if (inputData.value) {
      setAmount(inputData.value)
    } else {
      setAmount(0);
    }
  }

  const onClickedAmountButton = (value) => {    
    setAmount(value);
  }

  const onClickedTopUp = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        "top_up_amount": parseInt(amount)
      };

      const response = await post('/topup', payload, true);

      console.log(response);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        navigateToPage('/');
      }, 3000);

    } catch (err) {

    }
    
  }

  return (
    <div className='flex gap-4 w-full'>
      {alert? <Alert type={"success"} message={`Berhasil melakukan top sebesar ${amount}`}/>: ''}
      {/* Input and Button Section */}
      <form className='flex flex-col gap-2 w-[70%]'>
        <CustomInput name="topup" icon={faMoneyBill} classNames="w-[100%]" sendData={setData} value={amount}/>
        <button 
          disabled={amount === 0 || amount > 1_000_000} 
          className='bg-red-600 w-[100%] text-white font-medium px-6 py-3 rounded-md disabled:bg-gray-400'
          onClick={onClickedTopUp}
          >
            Top Up
        </button>
        {amount > 1_000_000? <small className='text-[12px] text-red-600'>Nominal top tidak boleh lebih dari Rp1.000.000</small> :""}
      </form>
      {/* Button chooice of top up section */}
      <div className='flex  flex-wrap gap-5 w-[30%] h-[115px]'>
        {optionalAmount.map(it => {
          return (
            <button 
              key={it.id} 
              className='p-2 w-[100px] rounded-md border border-black' 
              value={it.amount}
              onClick={(e) => onClickedAmountButton(e.target.value)}
              >
              {it.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}