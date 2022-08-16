import React, { useRef } from 'react';
import Input from './Input';
  
const UseImperativehandler = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <center>
      <Input onFocus={() => inputRef.current.focus()} 
      ref={inputRef} />
      </center>
    </div>
  );
};
  
export default UseImperativehandler
