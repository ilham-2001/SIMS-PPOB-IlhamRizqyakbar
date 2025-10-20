import Login from './pages/login';
import Home from './pages/Home';
import Registration from './pages/Registration';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/registration' element={<Registration />}/>
      </Routes>
    </>
  )
}

export default App
