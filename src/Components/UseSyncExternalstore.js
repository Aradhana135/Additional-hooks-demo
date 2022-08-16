import { useSyncExternalStore } from 'react';

function UseSyncExternalstore() {
  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      };
    },
    () => window.innerWidth
    // () => -1,
  );

  return <p><center>
    Size: {width}</center></p>;
}


export default UseSyncExternalstore