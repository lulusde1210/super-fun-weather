import './Stickers.css';
import DraggableImage from "./DraggableImage";
import tshirt from '../assets/tshirt.png';
import shirt from '../assets/shirt.png';
import pinkshorts from '../assets/pinkshorts.png';
import greenshorts from '../assets/greenshorts.png';
import ribbon from '../assets/ribbon.png';
import hat from '../assets/hat.png';
import jacket from '../assets/jacket.png';
import pamela from '../assets/pamela.png';
import partyhat from '../assets/partyhat.png';
import pinkdress from '../assets/pinkdress.png';
import poodleskirt from '../assets/poodleskirt.png';
import umbrella from '../assets/umbrella.png';

const Stickers = () => {
    return (
        <div className="Stickers">
            <DraggableImage imgURL={shirt} />
            <DraggableImage imgURL={tshirt} />
            <DraggableImage imgURL={poodleskirt} />
            <DraggableImage imgURL={jacket} />
            <DraggableImage imgURL={pinkdress} />
            <DraggableImage imgURL={pamela} />
            <DraggableImage imgURL={hat} />
            <DraggableImage imgURL={partyhat} />
            <DraggableImage imgURL={pinkshorts} />
            <DraggableImage imgURL={greenshorts} />
            <DraggableImage imgURL={umbrella} />
            <DraggableImage imgURL={ribbon} />
        </div>
    );
};


export default Stickers;