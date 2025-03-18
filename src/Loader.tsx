'use client';

import { useEffect, useState } from 'react';
import catGifBase64 from '../src/catBase64';
import React from 'react';

interface LoaderProps {
  duration?: number;
  width?: number;
  height?: number;
}

const Loader: React.FC<LoaderProps> = ({
  duration = 6000,
  width = 200,
  height = 200,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    isVisible && (
      <div
        className='fixed inset-0 flex justify-center items-center bg-opacity-50 z-50'
        style={{
          transition: 'opacity 2s ease-out',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className='flex items-center justify-center w-full h-full'>
          <img
            src={catGifBase64}
            alt='Loading'
            width={width}
            height={height}
            className='rounded-full'
          />
        </div>
      </div>
    )
  );
};

export default Loader;
