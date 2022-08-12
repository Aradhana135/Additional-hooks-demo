import React, { useRef } from 'react';
import Input from './Input';
  
const UseImperativehandler = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <Input onFocus={() => inputRef.current.focus()} 
      ref={inputRef} />
    </div>
  );
};
  
export default UseImperativehandler
