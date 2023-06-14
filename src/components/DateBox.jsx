import './DateBox.css';
import { useState } from 'react';

const DateBox = () => {
    const currentTime = new Date().toLocaleString();
    const [time, setTime] = useState(currentTime);

    const changeTime = () => {
        const newTime = new Date().toLocaleString();
        setTime(newTime)
    };
    setInterval(() => {
        changeTime()
    }, 1000);

    return (
        <div className='DateBox'>
            <p>{time}</p>
        </div>
    )
};


export default DateBox;