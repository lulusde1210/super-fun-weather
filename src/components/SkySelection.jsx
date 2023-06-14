import './SkySelection.css';


const SkySelction = () => {
    return (
        <div className="SkySelection">
            <p>Change sky</p>
            <select className="sky-select">
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rainy">Rainy</option>
                <option value="snowy">Snowy</option>
                <option value="snowy">Windy</option>
            </select>
        </div>
    );
};

export default SkySelction;