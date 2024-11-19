"use client";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { id: generateRandomId(), name, quantity, category };
    console.log(item);
    alert(`Added item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-900 p-6 rounded-lg shadow-lg space-y-4 w-80"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
          className="w-full p-2 rounded text-black"
        />

        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="bg-gray-300 text-black px-2 py-1 rounded disabled:opacity-50"
            >
              -
            </button>
            <span className="text-white">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="bg-blue-500 text-white px-2 py-1 rounded disabled:opacity-50"
            >
              +
            </button>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          +
        </button>
      </form>
    </div>
  );
}

const generateRandomId = () => Math.random().toString(36).substr(2, 9);

export default NewItem;