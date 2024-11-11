import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
<li 
  className="flex justify-between items-center p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md mb-3 hover:bg-orange-600 transition-colors" 
  onClick={onSelect}
>
  <div>
    <button className="font-semibold text-lg text-white bg-transparent border-none p-0 cursor-pointer">
      {name}
      </button>
    <p className="text-sm text-white-400">Buy {quantity} in {category}</p>
  </div>
</li>

  );
};

export default Item;
