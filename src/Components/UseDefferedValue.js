import React, { useDeferredValue, useState, useTransition } from 'react'
import ProductLists1 from './ProductLists1';
import Data from './Data';
const dummyProducts = Data();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}
const UseDefferedValue=()=> {
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
        <ProductLists1 products={filteredProducts} />
      </div>
      </>
    );
  }
export default UseDefferedValue
