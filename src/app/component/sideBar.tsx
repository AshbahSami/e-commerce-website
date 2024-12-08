'use client'
import { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="w-64 p-4 bg-white absolute left-0 top-0 h-full">
        <button onClick={toggleSidebar} className="text-2xl">Close</button>
        {/* Add filters */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Filters</h3>
          {/* Category Filter */}
          <div className="mt-4">
            <p className="font-medium">Categories</p>
            <ul className="space-y-2">
              <li><button>Fashion</button></li>
              <li><button>Accessories</button></li>
              <li><button>Electronics</button></li>
            </ul>
          </div>
          {/* Price Filter */}
          <div className="mt-4">
            <p className="font-medium">Price Range</p>
            <input type="range" min="0" max="100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
