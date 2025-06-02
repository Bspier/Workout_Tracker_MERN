import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 flex justify-between items-center">
    <div className="text-xl font-bold text-white">Exercise Tracker</div>
    <div className="space-x-4">
      <Link to="/" className="text-blue-400 hover:underline">Home</Link>
      <Link to="/add-exercise" className="text-blue-400 hover:underline">Add Exercise</Link>
    </div>
  </nav>
);

export default Navbar;