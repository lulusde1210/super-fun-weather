import './SkySelection.css';


const SkySelction = ({ changeBackPic }) => {
    return (
        <div className="SkySelection">
            <p>Change sky</p>
            <select onChange={changeBackPic} id='sky-select' className="sky-select">
                <option value=""></option>
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rainy">Rainy</option>
                <option value="snowy">Snowy</option>
                <option value="windy">Windy</option>
            </select>
        </div>
    );
};

export default SkySelction;