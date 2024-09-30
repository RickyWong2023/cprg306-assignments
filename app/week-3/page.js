import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Shopping List</h1>
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
