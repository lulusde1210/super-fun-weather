import Draggable from 'react-draggable';
import React from 'react';

const DraggableImage = ({ imgURL }) => {
    const nodeRef = React.useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="drag-img" style={{
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