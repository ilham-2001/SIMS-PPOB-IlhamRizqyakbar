import Header from '../components/Header';
import MainCard from '../components/MainCard';

import '../assets/css/home.css'

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

import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
} from '../assets/assets';

const Home = () => {
  return (
    <main>
      <Header />

      <div className='container mx-auto flex flex-col gap-12 mt-8'>
        <MainCard />
        <ServicesList />
        <BannerList />
      </div>
    </main>
  )
}

export default Home;


const services = [
  {
    id: 1,
    label: 'PBB',
    logo: pbb,
  },
  {
    id: 2,
    label: 'Listrik',
    logo: listrik,
  },
  {
    id: 3,
    label: 'Pulsa',
    logo: pulsa,
  },
  {
    id: 4,
    label: 'PDAM',
    logo: pdam,
  },
  {
    id: 5,
    label: 'PGN',
    logo: pgn,
  },
  {
    id: 6,
    label: 'TV Langganan',
    logo: tv,
  },
  {
    id: 7,
    label: 'Musik',
    logo: musik,
  },
  {
    id: 8,
    label: 'Voucher Game',
    logo: game,
  },
  {
    id: 9,
    label: 'Voucher Makanan',
    logo: voucherMakanan,
  },
  {
    id: 10,
    label: 'Kurban',
    logo: kurban,
  },
  {
    id: 11,
    label: 'Zakat',
    logo: zakat,
  },
  {
    id: 12,
    label: 'Paket Data',
    logo: paketData,
  },
];

const ServicesList = () => {
  return (
    <div className='flex justify-between'>
      {services.map(it => {
        return (
          <div className='flex text-center flex-col gap-1 cursor-pointer max-w-[70px] max-h-[70px]' key={it.id}>
            <img src={it.logo} alt="" />
            <p className='text-[12px]'>{it.label}</p>
          </div>
        )
      })}
    </div>
  )
}


const banners = [
  {
    id: 1,
    img: banner1,
  },
  {
    id: 2,
    img: banner2,
  },
  {
    id: 3,
    img: banner3,
  },
  {
    id: 4,
    img: banner4,
  },
  {
    id: 5,
    img: banner5,
  },
];

const BannerList = () => {
  return (
    <div className='flex flex-col gap-2 mt-6'>
      <p className='font-medium'>Temukan Promo menarik</p>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {banners.map((it) => (
          <img
            key={it.id}
            src={it.img}
            alt="banner image"
            className="flex-shrink-0 w-[270px] h-auto rounded-lg object-cover cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}