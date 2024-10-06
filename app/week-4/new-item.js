"use client"
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center">
      <span className="px-4 text-black">{quantity}</span>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-gray-400 px-4 mx-1 rounded text-white disabled:opacity-50"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-blue-500 px-4 mx-1 rounded text-white disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}