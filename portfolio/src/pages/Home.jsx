import React from 'react';

import '../css/home.css'; 
import '../images/boxes.jpg';

function Home() {
  return (
    <div className='home'>
      <div className="container-fluid py-5 text-center">
        <h1 className="display-5 fw-bold text-md-center">Sumayyah Emama</h1>
        <p className="col-md-12 fs-4 Text">
          Welcome to my digital portfolio, where innovation meets design. Explore my projects to see how I blend creativity with technology to craft impactful digital experiences. Let's connect and explore the endless possibilities together!
        </p>
        {/* <img src={} alt="Avatar" className="img-fluid" /> */}
      </div>
    </div>
  );
}

export default Home;

