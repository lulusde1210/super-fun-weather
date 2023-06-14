import './WeatherInfo.css';

const WeatherInfo = ({ info, text, backColor }) => {
    return (
        <div className={`WeatherInfo ${backColor}`} >
            <h1>{info}</h1>
            <p>{text}</p>
        </div >

    )
};

export default WeatherInfo;