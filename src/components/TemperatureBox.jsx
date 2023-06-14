import './TemperatureBox.css';
import { useState } from 'react';

const TemperatureBox = () => {
    const [temp, setTemp] = useState(32)

    const handleIncreaseTemp = () => {
        setTemp(prevTemp => prevTemp + 1)
    };
    const handleDecreaseTemp = () => {
        setTemp(prevTemp => prevTemp - 1)
    };
    return (
        <div className="TemperatureBox">
            <span onClick={handleDecreaseTemp} id="increaseTempControl">⬇️</span>
            <h1>{temp}</h1>
            <span onClick={handleIncreaseTemp} id="decreaseTempControl">⬆️</span>
        </div>
    );
};

export default TemperatureBox;