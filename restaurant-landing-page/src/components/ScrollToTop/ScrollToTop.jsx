import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button label="↑" onClick={scrollToTop} className={`fixed bottom-8 right-8 ${isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 ease-in-out  bg-[#fe9e0d] hover:bg-[#ffa621] text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-orange-300`} />
  );
};
