import Header from '../components/Header';
import MainCard from '../components/MainCard';

import { 
  game, 
  kurban, 
  listrik, 
  musik, 
  paketData, 
  pbb, 
  pdam,
  pgn,
  pulsa,
  tv,
  voucherMakanan,
  zakat
} from '../assets/assets';

const Home = () => {
  return (
    <main>
      <Header />

      <div className='container mx-auto mt-8'>
        <MainCard />
      </div>
    </main>
  )
}

export default Home;

const ServicesList = () => {
  return (
    <div className='flex justify-between'>
      
    </div>
  )
}