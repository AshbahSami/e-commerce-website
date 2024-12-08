'use client'
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Arm Chair", image: "/Trending products.png", price: 20, quantity: 2 },
    { id: 2, name: "Arm Chair", image: "/Trending products.png", price: 15, quantity: 1 },
  ]);
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleClearCart = () => setCartItems([]);
  const handleCalculateShopping = () => {
    // handle shopping calculation logic
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + 5; // Add shipping fee, for example

  return (
    <div className="min-h-screen flex justify-center py-10 bg-gray-50">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* Cart Items List */}
        <div className="bg-white p-6 shadow-lg rounded-md">
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-4 text-sm font-semibold text-gray-600 mb-4">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <span className="text-lg font-medium">{item.name}</span>
                </div>
                <span className="text-gray-500">${item.price}</span>
                <span className="text-gray-500">{item.quantity}</span>
                <span className="text-gray-500">${item.price * item.quantity}</span>
                <button
                  onClick={() => setCartItems(cartItems.filter(i => i.id !== item.id))}
                  className="text-red-500"
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearCart}
            className="mt-6 w-full bg-pink-500 text-white py-2 rounded-md"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Totals */}
        <div className="bg-white p-6 shadow-lg rounded-md">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal:</span><span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total:</span><span>${total}</span>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">I agree to the terms and conditions</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-md mb-6">
            Proceed to Checkout
          </button>

          <h3 className="text-lg font-bold mb-4">Calculate Shipping</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Country"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <button type="button" onClick={handleCalculateShopping} className="w-full bg-pink-500 text-white py-2 rounded-md">
              Calculate Shipping
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
