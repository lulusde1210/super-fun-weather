import './DiyCard.css';
import SkySelection from './SkySelection';
import { useState } from 'react';
import girl from '../assets/stickers/girl.png';
import sunny from '../assets/skies/sunny.jpeg';
import rainy from '../assets/skies/rainy.jpeg';
import snowy from '../assets/skies/snowy.jpeg';
import windy from '../assets/skies/windy.jpeg';
import cloudy from '../assets/skies/cloudy.jpeg';


const DiyCard = () => {
    const [backPic, setBackPic] = useState("");

    const changeBackPic = (event) => {
        const weather = event.target.value;

        if (weather === 'sunny') {
            setBackPic(sunny)
        } else if (weather === 'rainy') {
            setBackPic(rainy)
        } else if (weather === 'snowy') {
            setBackPic(snowy)
        } else if (weather === 'windy') {
            setBackPic(windy)
        } else if (weather === 'cloudy') {
            setBackPic(cloudy)
        } else {
            setBackPic("")
        }
    };


    return (
        <div style={{ background: `url(${backPic})` }} className="DiyCard" >
            <SkySelection changeBackPic={changeBackPic} />
            <img src={girl} />
        </div >
    );
};

export default DiyCard;