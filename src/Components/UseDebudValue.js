import { useDebugValue, useState } from "react";
  
function useCount() {
    const [count, setCount] = useState(0);
  
    setInterval(() => {
        setCount(count + 1);
    }, 4000);
  
    useDebugValue(count);
    return count;

}
  
function UseDebudValue() {
    const count = useCount();
  
    return (
        <div className="App">
            <button>{count}</button>
            {console.log(count)}
            <h4>
            React useDebugValue Hook is introduced for the ReactJs versions above 18. React useDebugValue Hook helps developers to debug custom hooks.
            </h4>
        </div>
    );
}
  

export default UseDebudValue