import './SearchBox.css';
import { useState } from 'react';

const SearchBox = () => {
    const [val, setVal] = useState('Search City Name')
    const handleCityInput = (event) => {
        setVal(event.target.value)
    };

    return (
        <div className="SearchBox">
            <input type="text" onInput={handleCityInput} className='search-bar' placeholder={val} />
            <button>Search</button>
        </div>
    );

};

export default SearchBox;