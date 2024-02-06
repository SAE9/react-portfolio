import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/contact';
import ProjectsGallery from './pages/ProjectsGallery';
import Footer from './components/Footer';


function App() {
    return <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects-gallery" element={<ProjectsGallery />} />
        </Routes>
        <Footer />
    </Router>;
}

export default App