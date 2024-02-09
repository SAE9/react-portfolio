import React from 'react';
import avatar from '../images/girl.jpg';
import '../css/home.css';
import '../images/boxes.jpg';


function Home() {
  return (
    <div className='home'>
      <div className="container inherit-height">
        <div className="row inherit-height">
          <div className="col-md-6 col-12 text-content">
            <h1 className="display-5 fw-bold">Sumayyah Emama</h1>
            <p className="text">
              Welcome to my digital portfolio, where innovation meets design! Explore my projects and connect with me.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end mb-4">
            {/* <img src={avatar} alt="Avatar" className="img-fluid image-resize" /> */}
            <img src="https://images.unsplash.com/photo-1515138692129-197a2c608cfd" alt="Avatar" className="img-fluid image-resize" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

