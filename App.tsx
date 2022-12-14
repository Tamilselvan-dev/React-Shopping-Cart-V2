import * as React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Navbar from './components/Navbar'

export default function App() {
  return (
    <React.Fragment>
       <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}
