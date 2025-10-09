import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header />
        <main>
          <Routes>
  <Route index element={<About />} /> 
  <Route path="/" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="/header" element={<Header />} />
  <Route path="/footer" element={<Footer />} />
</Routes>

        </main>
        <Footer /> {/* Always visible */}
      </div>
    </Router>
  );
}

export default App;
