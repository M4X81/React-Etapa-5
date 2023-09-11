import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import '/bootstrap.bundle.min.js'





export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <Link to={"Principal"} className="navbar-brand"><img src="/src/components/Img/23518959_798271170355113_2639979903027262289_n2.jpg" className='img' alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
             <Link to="/main1" className="nav-link">Main1</Link>
            </li>
            <li className="nav-item">
            <Link to="/main2" className="nav-link">Main2</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Otro...</a>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
  );

    {/*<nav className="navbar navbar-expand navbar-light bg-light">
      <h2>Acá está el navbar</h2>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/main1" className="nav-link">Main1</Link>
          </li>
          <li className="nav-item">
            <Link to="/main2" className="nav-link">Main2</Link>
          </li>
        </ul>
      </div>
    </nav>
  );*/}
}







