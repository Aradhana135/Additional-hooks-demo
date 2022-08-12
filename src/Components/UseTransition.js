import React, { useState, useTransition } from 'react'
import ProductLists from './ProductLists';
import Data from './Data';
import "./UseTrans.css";
const dummyProducts = Data();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}
const UseTransition=()=> {
    const [isPending, startTransition] = useTransition();
    const [filterTerm, setFilterTerm] = useState('');
    
    const filteredProducts = filterProducts(filterTerm);
    
    function updateFilterHandler(event) {
      startTransition(() => {
        setFilterTerm(event.target.value);
      });
    }
   
    return (<>
    <h1>       </h1>

      <div id="app"><label> Enter the Product no:
        <input type="text" onChange={updateFilterHandler} />
        </label>
        {isPending && <p style={{color: 'red'}}>Updating list..</p>}
        <ProductLists products={filteredProducts} />
      </div>
      </>
    );
  }
export default UseTransition
