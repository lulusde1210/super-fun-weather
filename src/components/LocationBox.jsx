import { useState } from 'react';
import './LocationBox.css';

const LocationBox = ({ city }) => {

    return (
        <div className="LocationBox">
            <div className="location">
                <h1>{city}</h1>
            </div>
        </div>
    );
};


export default LocationBox;