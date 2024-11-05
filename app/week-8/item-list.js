"use client"

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');
  const [itemsState, setItems] = useState(items);

  // Function to group items by category
  const groupItemsByCategory = (items) => {
    return items.reduce((grouped, item) => {
      const category = item.category;
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(item);
      return grouped;
    }, {});
  };

  let sortedItems = [...items];
  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const groupedItems = groupItemsByCategory(items);

  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };
  const handleRemoveItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sort Items By:</h2>
      <div className="flex space-x-4 mb-6">
        <button 
          className={`px-4 py-2 ${sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-orange-600 text-white'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button 
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-orange-600 text-white'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
        <button 
          className={`px-4 py-2 ${sortBy === 'group' ? 'bg-orange-500 text-white' : 'bg-orange-600 text-white'}`}
          onClick={() => setSortBy('group')}
        >
          Grouped Category
        </button>
      </div>

      <ul>
        {sortBy === 'group' ? (
          Object.keys(groupedItems).sort().map((category) => (
            <li key={category} className="mb-6">
              <h3 className="text-lg font-semibold capitalize mb-2 text-white-400">{category}</h3>
              <ul className="space-y-2">
                {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                  <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
                ))}
              </ul>
            </li>
          ))
        ) : (
          sortedItems.map(item => (
            <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ItemList;
