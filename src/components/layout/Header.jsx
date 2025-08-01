import React from 'react';
import DropdownMenu from "../DropdownMenu";

const Header = () => {
  return (
    <header className="fixed top-4 left-4 w-full z-40 bg-transparent">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <a href="/" className="block">
          <img
            src="/images/logos/kingshaus-white.svg"
            alt="Kingshaus Logo"
            className="h-10 md:h-12"
          />
        </a>
		</div>
        <div className="absolute top-6 right-6 z-50 bg-white rounded-lg px-4 py-1 shadow-md flex items-right gap-4">
        <DropdownMenu />
        <button className="bg-[#294437] text-white font-semibold px-4 py-3 rounded  text-xs">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
