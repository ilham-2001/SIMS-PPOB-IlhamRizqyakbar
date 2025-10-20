import { logo } from '../assets/assets';

const links = [
  {
    name: 'Top up',
    uri: '',
    id: 1
  },
    {
    name: 'Transaction',
    uri: '',
    id: 2
  },
    {
    name: 'Akun',
    uri: '',
    id: 3
  },
]

const Header = () => {
  return (
    <header className='p-4 border-b border-b-gray-200'>
      <div className='container mx-auto flex justify-between'>
        <div className='flex gap-2 items-center'>
          <img src={logo} alt="this is a logo" />
          <p className='font-semibold'>SIMS PPOB</p>
        </div>
        <nav>
          <ul className='flex gap-8'>
            {links.map(it => {
              return <li className='cursor-pointer' key={it.id}>{it.name}</li>
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;