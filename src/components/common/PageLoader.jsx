import React from 'react';
import './PageLoader.css';

const PageLoader = () => {
  return (
    <section className="page-loader fixed inset-0 z-50 bg-black text-white">
      <div className="page-loader__container w-full h-full flex relative overflow-hidden">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`page-loader__shutter page-loader__shutter--${index + 1} flex-1`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default PageLoader;
