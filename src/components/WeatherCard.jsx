import './WeatherCard.css';
import clearDay from '../assets/clearDay.svg';
import WeatherIcon from './WeatherIcon';
import LocationBox from './LocationBox';
import WeatherInfoList from './WeatherInfoList';
import DateBox from './DateBox';
import SearchBox from './SearchBox';

const WeatheCard = () => {
    return (
        <div className="WeatherCard">
            <SearchBox />
            <DateBox />
            <LocationBox />
            <WeatherIcon imgSrc={clearDay} className="weather-icon" />
            <WeatherInfoList />
        </div >
    );

};

export default WeatheCard;


