import './DiyCard.css';
import girl from '../assets/girl.png';
import sunny from '../assets/sunny.jpeg';
import rainy from '../assets/rainy.jpeg';
import snowy from '../assets/snowy.jpeg';
import windy from '../assets/windy.jpeg';
import cloudy from '../assets/cloudy.jpeg';

const DiyCard = ({ weather }) => {
    let backPic = ""

    if (weather === 'sunny') {
        backPic = sunny
    } else if (weather === 'rainy') {
        backPic = rainy
    } else if (weather === 'snowy') {
        backPic = snowy
    } else if (weather === 'windy') {
        backPic = windy
    } else if (weather === 'cloudy') {
        backPic = cloudy
    }

    const styles = {
        background: `url(${backPic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div style={styles} className="DiyCard" >
            <img src={girl} />
        </div >
    );
};

export default DiyCard;