import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';


const DraggableImage = ({ imgURL }) => {
    return (
        <Draggable>
            <div className="drag-img" style={{
                background: `url(${imgURL})`,
                width: '150px',
                height: '150px',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}
            >
            </div>
        </Draggable>
    )
}

export default DraggableImage;