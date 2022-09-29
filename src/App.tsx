import React from 'react';
import './App.css';
import Home from './components/home/Home';
import {Grid} from '@material-ui/core';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
  );
}

export default App;
