import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
         <h2>Acá esta el navbar</h2>
      <ul>
        <li>
          <Link to="/main1">Main1</Link>
        </li>
        <li>
          <Link to="/main2">Main2</Link>
        </li>
      </ul>
    </nav>
  );
}








