import { useEffect, useState } from 'react';

const useScrollHandler = (position) => {
  // setting initial value to true
  const [scroll, setScroll] = useState(true);

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < position;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener('scroll', onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, position, setScroll]);

  return scroll;
};

export default useScrollHandler;
