import { useEffect, useInsertionEffect, useLayoutEffect } from 'react';

const Child = () => {
  useEffect(() => {
    console.log('useEffect child is called');
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect child is called');
  });
  useInsertionEffect(() => {
    console.log('useInsertionEffect child is called');
  });
};

function UseInsertion() {
  useEffect(() => {
    console.log('useEffect app is called');
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect app is called');
  });
  useInsertionEffect(() => {
    console.log('useInsertionEffect app is called');
  });
  return (
    <div className="App">
      <Child />
      <p>Hello ....</p>
    </div>
  );
}
export default UseInsertion