import { useState, useEffect } from 'react';

function useWindowSize() {
  const isClientSide = typeof window === 'object';

  function getSize() {
    return {
      width: isClientSide ? window.innerWidth : undefined,
      height: isClientSide ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClientSide)
      return false;
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowSize;
}

export default useWindowSize;