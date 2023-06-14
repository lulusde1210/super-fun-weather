import { useState } from 'react';
import './App.css';
import WeatheCard from './components/WeatherCard';
import DiyCard from './components/DiyCard';
import Stickers from './components/Stickers';
import SkySelection from './components/SkySelection';


function App() {

  return (
    <div className='App'>
      <WeatheCard />
      <SkySelection />
      <DiyCard weather='sunny' />
      <Stickers />

    </div>
  )
}

export default App
