import Login from './pages/login';
import Home from './pages/Home';
import Registration from './pages/Registration';
import AccountSetting from './pages/AccountSetting';
import Payment from './pages/Payment';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/account' element={<AccountSetting />}/>
          <Route path='/payment' element={<Payment />}/>
      </Routes>
    </>
  )
}

export default App
