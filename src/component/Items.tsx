import React, { useState, useEffect } from 'react';
import { axiosInstance, IMG_BASE_URL } from '../service';
import { ComponentParameters, ContentTypes } from '../type';
import { ScrollableContainer } from './ScrollableContainer';
import './Items.css';
import { AddFavorite } from '../page/Favorite';
import { Modal } from './Modal';

export const Items = (param: ComponentParameters): any => {
    const [data, setData] = useState<ContentTypes[]>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [currentData, setCurrentData] = useState<ContentTypes>();
    useEffect(() => {
        const getItems = async () => {
            const request = await axiosInstance.get(param.fetchURL);
            //console.log(request.data.results);
            setData(request.data.results);
            return request;
        };

        getItems();
    }, [param.fetchURL]);

    const clickHandler = (item: ContentTypes, index: number) => {
        //console.log(item);
        //AddFavorite(item);
        setCurrentData(item);
        setModal(!modal);
    };

    //console.log(onItem);
    return (
        <>
            {/* <div className="row_prevent_vibrate">
      {onItem === true && <Detail item={currentData}/>}
    </div> */}
            <div>
                <h1 className='items_title'>{param.title}</h1>
                <ScrollableContainer>
                    {data.map((item, index) => {
                        return (
                            <div
                                className={
                                    param.isBackdrop === false
                                        ? 'items_poster'
                                        : 'items_poster_backdrop'
                                }
                                key={item.id}>
                                <img
                                    className={
                                        param.isBackdrop === false
                                            ? 'items_poster_img'
                                            : 'items_poster_backdrop_img'
                                    }
                                    src={`${IMG_BASE_URL}${
                                        param.isBackdrop === false
                                            ? item.poster_path
                                            : item.backdrop_path
                                    }`}
                                    alt={item.original_title}
                                    onClick={() => clickHandler(item, index)}
                                />
                            </div>
                        );
                    })}
                </ScrollableContainer>
                {modal === true && <Modal item={currentData}></Modal>}
            </div>
        </>
    );
};
