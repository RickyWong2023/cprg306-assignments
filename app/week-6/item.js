import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md mb-3">
      <div>
        <p className="font-semibold text-lg text-white">{name}</p>
        <p className="text-sm text-gray-400">Buy {quantity} in {category}</p>
      </div>
    </li>
  );
};

export default Item;
