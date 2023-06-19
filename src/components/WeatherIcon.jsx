import "./WeatherIcon.css";

const WeatherIcon = ({ icon, description }) => {
    return (
        <div>
            <div className='WeatherIcon'>
                <img src={`../assets/weatherIcons/${icon}.svg`} alt={icon} />

                <p>{description}</p>
            </div>
        </div>
    );
};

export default WeatherIcon;