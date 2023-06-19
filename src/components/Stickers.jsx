import './Stickers.css';
import DraggableImage from "./DraggableImage";
import tshirt from '../assets/stickers/tshirt.png';
import shirt from '../assets/stickers/shirt.png';
import pinkshorts from '../assets/stickers/pinkshorts.png';
import greenshorts from '../assets/stickers/greenshorts.png';
import ribbon from '../assets/stickers/ribbon.png';
import hat from '../assets/stickers/hat.png';
import jacket from '../assets/stickers/jacket.png';
import pamela from '../assets/stickers/pamela.png';
import partyhat from '../assets/stickers/partyhat.png';
import pinkdress from '../assets/stickers/pinkdress.png';
import poodleskirt from '../assets/stickers/poodleskirt.png';
import umbrella from '../assets/stickers/umbrella.png';

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