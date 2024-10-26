import React from 'react';
import Hero from './components/Hero';
import Video from './components/Video';
import Agents from './components/Agents';
import Calculator from './components/Calculator';
import BetaForm from './components/BetaForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Video />
      <Agents />
      <Calculator />
      <BetaForm />
      <Footer />
    </div>
  );
}

export default App;