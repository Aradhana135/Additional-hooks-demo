import {useDeferredValue} from 'react'
function ProductList1({ products }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}
export default ProductList1