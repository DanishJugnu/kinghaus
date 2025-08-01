import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-center border-t border-gray-800">
      <div className="text-sm text-gray-400">
        © {new Date().getFullYear()} Kingshaus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
