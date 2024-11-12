"use client";

import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import Link from 'next/link';

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, { id: generateRandomId(), ...item }]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\u2011-\u26FF]|[\u2011-\u26FF]|[\u2011-\u26FF])/g, '');
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return (
      <div>
        <p>You must be logged in to view this page.</p>
        <Link href="/week-9">Click here to go back to the login page.</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 flex">
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-6 text-center">Shopping List</h1>
        <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

const generateRandomId = () => Math.random().toString(36).substr(2, 9);

export default Page;
