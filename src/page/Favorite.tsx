import React from 'react';
import { ContentTypes } from '../type';

const TEMP_FAVORITE: ContentTypes[] = [];

export const AddFavorite = (content: ContentTypes) => {
    TEMP_FAVORITE.filter((value, index, array) => {
        // if (array.indexOf(value.id) === array[index].id) {
        // }
    });
    TEMP_FAVORITE.push(content);
};

export const Favorite = () => {
    console.log(TEMP_FAVORITE);
    return (
        <div className='favorite' style={{ color: 'white' }}>
            즐겨찾기
        </div>
    );
};
