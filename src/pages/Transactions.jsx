import { useState } from 'react'
import Header from '../components/Header'
import MainCard from '../components/MainCard'

import { get } from '../utils/api'
import { useEffect } from 'react'

const Transactions = () => {
  const [ transactions, setTransactions ] = useState([]);
  const [ queryParams, setQueryParams] = useState({'offset': 0, 'limit': 5});

  const getTransactionsHistory = async () => {
    const response = await get('/transaction/history', true, queryParams);

    setTransactions(response.data.data.records);
  }

  const onClickedShowMore = () => {
    setQueryParams({'offset': queryParams.offset + queryParams.limit, 'limit': 5});
    getTransactionsHistory();
  }

  useEffect(() => {
    getTransactionsHistory();
  }, [])

  return (
    <div>
      <Header />
        <div className='container mx-auto flex flex-col gap-12 mt-8'>
          <MainCard />
          <div className='flex flex-col gap-6'>
            <h3 className='font-medium text-[18px]'>Semua Transaksi</h3>
              {transactions.map(it => {
                return <TransactionCard key={it.invoice_number} record={it}/>
              })}
              <p className='text-center text-red-600 font-medium cursor-pointer hover:opacity-65' onClick={onClickedShowMore}>Show more</p>
          </div>
      </div>
    </div>
  )
}

export default Transactions


const TransactionCard = ({ record }) => {
  const date = new Date(record.created_on);

  const dayMonthYear = date.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
  const time = date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

  const formattedDate = `${dayMonthYear} ${time} WIB`;

  let formattedStyle = '';

  if (record.transaction_type === "TOPUP") {
    formattedStyle = 'text-green-600';
  } else {
    formattedStyle = 'text-red-600';
    
  }

  return (
    <div className='w-full px-4 py-2 border border-gray-200 rounded-md flex justify-between'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-1'>
            { record.transaction_type === "TOPUP"? <span className={`${formattedStyle}`}>+</span>: <span className={`${formattedStyle}`}>-</span> }
            <p className={`text-[18px] ${formattedStyle}`}>Rp.{record.total_amount}</p>
          </div>
          <small className='text-gray-500 text-[12px]'>{formattedDate}</small>
        </div>
        <p className='text-[12px]'>{record.description}</p>
    </div>
  )
}