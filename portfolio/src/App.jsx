import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Project from '../components/Project';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from '../pages/Contact';
import ProjectsGallery from './pages/ProjectsGallery';

function App() {
    return <Router>
      <Header />
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects-gallery" element={<ProjectsGallery />} />
        </Routes>
    </Router>;
}

export default App