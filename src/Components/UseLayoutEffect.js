import React from 'react'

import { useLayoutEffect, useState } from 'react';
  
const UseLayoutEffect = () => {
  const [value, setValue] = useState('AS');
    
  useLayoutEffect(() => {
    if (value === 'AS') {
     // Changing the state 
      setValue('Aradhana');
    }
    console.log('UseLayoutEffect is called with the value of ', value);
  }, [value]);
  
  return <div>
    <h1 style={{color:"grey"}}> Hello {value}, UseLayoutEffect is called !!</h1>
    <h4>The useLayoutEffect works similarly to useEffect but rather working asynchronously like useEffect hook, it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. But to prevent blocking the page loading, we should always use useEffect hook.

The useLayoutEffect hook works in the same phase as componentDidMount and componentDidUpdate methods. We should only use useLayoutEffect if useEffect isn’t outputting the expected result.</h4>
    </div>;
};
  
export default UseLayoutEffect