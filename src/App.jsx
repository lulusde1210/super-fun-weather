import './App.css';
import WeatheCard from './components/WeatherCard';
import DiyCard from './components/DiyCard';
import Stickers from './components/Stickers';
import NavBar from './components/NavBar';


function App() {

  return (
    <div className='App'>
      <NavBar />
      <div className="content">
        <WeatheCard />
        <DiyCard />
        <Stickers />
      </div>
    </div>
  )
}

export default App
