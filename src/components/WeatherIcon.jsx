import "./WeatherIcon.css";

const WeatherIcon = ({ imgSrc }) => {
    return (
        <div>
            <div className='WeatherIcon'>
                <img src={imgSrc} />
            </div>
        </div>
    );
};

export default WeatherIcon;