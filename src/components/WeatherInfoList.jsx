import './WeatherInfoList.css';
import WeatherInfo from './WeatherInfo';

const WeatherInfoList = () => {
    return (
        <div className='WeatherInfoList'>
            <WeatherInfo info='72' text='TEMP' backColor='purple' />
            <WeatherInfo info='5%' text='RAIN' backColor='blue' />
            <WeatherInfo info='6' text='WIND(km/h)' backColor='green' />
        </div>
    );
};

export default WeatherInfoList;