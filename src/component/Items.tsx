import React, { useState, useEffect } from 'react';
import { axiosInstance, IMG_BASE_URL } from '../service';
import { ComponentParameters, ContentTypes } from '../type';
import { ScrollableContainer } from './ScrollableContainer';
import { Modal } from './Modal';
import styled from 'styled-components';

const ItemsTitle = styled.h1`
    margin-left: 40px;
    padding-bottom: 10px;
    color: white;
`;
const ItemPoster = styled.div`
    height: 320px;
`;
const ItemPosterImage = styled.img`
    object-fit: contain;
    width: 200px;
    height: 300px;
    padding: 10px;
    transition: transform 450ms;

    &:hover {
        transform: scale(1.05);
    }
`;
const ItemPosterBackdrop = styled.div`
    width: 300px;
    height: 200px;
    margin-right: 10px;
`;
const ItemPosterBackdropImage = styled.img`
    object-fit: contain;
    width: 300px;
    height: 170px;
    border-radius: 20px;
    padding: 10px;
    transition: transform 450ms;

    &:hover {
        transform: scale(1.05);
    }
`;

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
            <div>
                <ItemsTitle>{param.title}</ItemsTitle>
                <ScrollableContainer>
                    {data.map((item, index) => {
                        return (
                            <>
                                {param.isBackdrop === false ? (
                                    <ItemPoster key={item.id}>
                                        <ItemPosterImage
                                            src={
                                                IMG_BASE_URL + item.poster_path
                                            }
                                            alt={item.original_title}
                                            onClick={() =>
                                                clickHandler(item, index)
                                            }
                                        />
                                    </ItemPoster>
                                ) : (
                                    <ItemPosterBackdrop key={item.id}>
                                        <ItemPosterBackdropImage
                                            src={
                                                IMG_BASE_URL +
                                                item.backdrop_path
                                            }
                                            alt={item.original_title}
                                            onClick={() =>
                                                clickHandler(item, index)
                                            }
                                        />
                                    </ItemPosterBackdrop>
                                )}
                            </>
                        );
                    })}
                </ScrollableContainer>
                {modal === true && <Modal item={currentData}></Modal>}
            </div>
        </>
    );
};
