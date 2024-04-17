import React, { useState } from 'react'
import { PasswordIcon } from '../../Icons/PasswordIcon'
export const Input = ({type, icon, ...props}) => {
  const [inputType, setInputType] = useState(type);
  // const [value, setValue] = useState(type);
  const checkType = () => {
    switch (inputType) {
      case "password":
        return setInputType ("text");
      case "text":
        return setInputType ("password");
    }
  };
   return (
    <label>
      {icon}
    <input  {...props} type={inputType} />
    {/* value={value} onChange={(e)=> setValue(e.target.value)} */}
    {type === 'password'&& (
    <div onClick={checkType}>
      <PasswordIcon/>
    </div>
    )}  
    </label>
  )

};


