import { logo } from '../assets/assets';

import useNavigateHelper from '../hooks/useNavigateHelper';

const links = [
  {
    id: 1,
    name: 'Top up',
    uri: '',
  },
    {
    id: 2,
    name: 'Transaction',
    uri: '',
  },
    {
    id: 3,
    name: 'Akun',
    uri: '/account',
  },
]

const Header = () => {
  const { navigateToPage, currentPath, _ } = useNavigateHelper();
  
  return (
    <header className='p-4 border-b border-b-gray-200'>
      <div className='container mx-auto flex justify-between'>
        <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigateToPage('/')}>
          <img src={logo} alt="this is a logo" />
          <p className='font-semibold'>SIMS PPOB</p>
        </div>
        <nav>
          <ul className='flex gap-8'>
            {links.map(it => {
              const selectedStyle = it.uri === currentPath? 'text-red-600': '';

              return (
                <li 
                  className={`cursor-pointer ${selectedStyle}`} 
                  onClick={() => navigateToPage(it.uri)}
                  key={it.id}
                  >
                    {it.name}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;