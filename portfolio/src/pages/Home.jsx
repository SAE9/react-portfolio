import React from 'react';
import avatar from '../images/girl3.png';
import '../css/home.css'; 
import '../images/boxes.jpg';


function Home() {
  return (
    <div className='home'>
      <div className="container-fluid py-5">
        <div className='row'>
          <div className="col-md-6 text-left">
            <h1 className="display-5 fw-bold text-md-center mt-3 text-center">Sumayyah Emama</h1>
            <p className="col-md-12 fs-4 Text mt-3">
              Welcome to my digital portfolio, where innovation meets design. Explore my projects and connect with me!
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end mb-4">
            <img src={avatar} alt="Avatar" className="img-fluid image-resize" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

