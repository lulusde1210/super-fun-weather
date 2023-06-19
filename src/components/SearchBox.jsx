import './SearchBox.css';
import { useState } from 'react';

const SearchBox = ({ search, placeholder, id }) => {
    const [term, setTerm] = useState('');

    const handleChange = (evt) => {
        setTerm(evt.target.value)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        search(term);
        setTerm('')
    };


    return (
        <form onSubmit={handleSubmit} className="SearchBox">
            <input
                type="text"
                onChange={handleChange}
                id={id}
                className='search-bar'
                placeholder={placeholder}
                value={term} />
            <button className='search-button'>Search</button>
        </form>
    );

};

export default SearchBox;