import './DiyCard.css';
import SkySelection from './SkySelection';
import { useState } from 'react';
import girl from '../assets/girl.png';
import sunny from '../assets/sunny.jpeg';
import rainy from '../assets/rainy.jpeg';
import snowy from '../assets/snowy.jpeg';
import windy from '../assets/windy.jpeg';
import cloudy from '../assets/cloudy.jpeg';


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
            <SkySelection onChangeFunc={changeBackPic} />
            <img src={girl} />
        </div >
    );
};

export default DiyCard;