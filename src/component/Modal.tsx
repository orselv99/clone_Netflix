import React from 'react';
import { ContentTypes } from '../type';

export const Modal = (props: { item: ContentTypes | undefined }) => {
    // dummy
    return (
        <div className='modal_overlay'>
            <div className='modal'>{props.item?.title}</div>;
        </div>
    );
};
/*
.modal {
    position: absolute;
    width: 500px;
    height: 700px;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

*/
