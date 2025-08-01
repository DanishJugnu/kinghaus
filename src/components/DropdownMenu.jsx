// src/components/DropdownMenu.jsx
import { useState } from "react";

const DropdownMenu = () => {
  const [hoveredTab, setHoveredTab] = useState(null);

  const menuItems = [
    {
      title: "Build Smarter",
      description: "By pre-constructing our homes offsite, we save valuable resources",
    },
    {
      title: "Sustainability",
      description: "We can lower the Carbon Footprintof home by 80%",
    },
    {
      title: "About",
      description: "Kingshaus has been developing quality homes for over 75 years",
    },
  ];

  return (
    <div
      className="relative flex items-center justify-end gap-8 font-medium text-xs"
      onMouseLeave={() => setHoveredTab(null)}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`transition cursor-pointer ${
            hoveredTab === index ? "text-black font-semibold" : "text-gray-400"
          }`}
          onMouseEnter={() => setHoveredTab(index)}
        >
          {item.title}
        </div>
      ))}

      {/* Unified dropdown bar */}
      <div
        className={`absolute top-full right-0 w-full max-w-xl bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-50 ${
          hoveredTab !== null ? "max-h-32 w-full opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        {hoveredTab !== null && (
          <div className="p-6 text-gray-600 text-sm">
            {menuItems[hoveredTab].description}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
