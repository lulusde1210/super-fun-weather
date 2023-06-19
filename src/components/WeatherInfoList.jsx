import './WeatherInfoList.css';
import WeatherInfo from './WeatherInfo';

const WeatherInfoList = ({ temp, humidity, wind }) => {
    return (
        <div className='WeatherInfoList'>
            <WeatherInfo info={temp} text='TEMP' backColor='purple' />
            <WeatherInfo info={humidity} text='HUMIDITY' backColor='blue' />
            <WeatherInfo info={wind} text='WIND(km/h)' backColor='green' />
        </div>
    );
};

export default WeatherInfoList;