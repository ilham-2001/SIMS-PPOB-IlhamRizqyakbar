import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


const CustomInput = ({
  name,
  value='',
  placeholder, 
  icon, 
  type, 
  sendData, 
  isValid=true, 
  label,
  classNames
  }) => {
  const [ stateValue, setValue ] = useState(value);
  const [ hide, setHide ] = useState(true);
  
  const styleBorder = isValid? 'border-gray-400': 'border-red-600';
  const styleIcon = isValid? 'text-gray-400': 'text-red-600';

  useEffect(() => {
    setValue(value);
  }, [value])

  const toggleHide = () => {
    setHide(!hide);
  }

  return (
    <div className={`flex flex-col gap-2 ${classNames || 'w-[50%]'}`}>
      {
        label?
        (
          <label htmlFor={name}>{label}</label>
        ): ''
      }
      <div className={`flex gap-2 items-center border rounded-md p-4 ${styleBorder}`}>
        <FontAwesomeIcon className={`${styleIcon}`} icon={icon}/>
        <input 
          className='outline-none placeholder-gray-400 w-full'
          placeholder={placeholder}
          type={type === 'password' && hide? 'password': 'text'}
          onInput={(e) => {
            const value =  e.target.value
            sendData({name: name, value:value })
            setValue(value)
          }}
          value={stateValue}
        />
      {
        type === "password"? 
        (    
        <FontAwesomeIcon className='text-gray-400 cursor-pointer' onClick={toggleHide} icon={hide? faEye: faEyeSlash}/>

        ): ""
      } 
      </div>
      {
        isValid? '': <small className='self-end text-[12px] text-red-600'>Password tidak sesuai</small> 
      }
    </div>
  )
}

export default CustomInput;