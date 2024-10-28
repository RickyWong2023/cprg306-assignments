"use client";

import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, { id: generateRandomId(), ...item }]);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Shopping List</h1>
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
};

const generateRandomId = () => Math.random().toString(36).substr(2, 9);

export default Page;
