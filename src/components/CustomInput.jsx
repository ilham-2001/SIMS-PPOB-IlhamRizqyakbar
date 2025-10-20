import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


const CustomInput = ({placeholder, icon, type }) => {
  const [ hide, setHide ] = useState(true);

  const toggleHide = () => {
    setHide(!hide);
  }

  return (
    <div className='flex gap-2 items-center border border-gray-400 rounded-md p-4 w-[50%]'>
      <FontAwesomeIcon className='text-gray-400' icon={icon}/>
      <input 
        className='outline-none placeholder-gray-400 w-full'
        placeholder={placeholder}
        type="text" 
      />
    {
      type === "password"? 
      (    
      <FontAwesomeIcon className='text-gray-400 cursor-pointer' onClick={toggleHide} icon={hide? faEye: faEyeSlash}/>

      ): ""
    } 
    </div>
  )
}

export default CustomInput;