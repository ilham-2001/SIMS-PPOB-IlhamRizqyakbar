import Header from '../components/Header';
import MainCard from '../components/MainCard';

const TopUp = () => {
  return (
    <div>
      <Header />
        <div className='container mx-auto flex flex-col gap-12 mt-8'>
          <MainCard />
      </div>
    </div>
  )
} 

export default TopUp;