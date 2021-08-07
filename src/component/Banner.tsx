import React from 'react';
import { useState, useEffect } from 'react';
import { ComponentParameters, ContentTypes } from '../type';
import { axiosInstance, IMG_BASE_URL } from '../service';
import './Banner.css';

export const Banner = (param: ComponentParameters) => {
    const [data, setData] = useState<ContentTypes>();
    useEffect(() => {
        const getItems = async () => {
            const request = await axiosInstance.get(param.fetchURL);
            //console.log(request.data.results);
            // topRated 컨텐츠 중에서 랜덤으로 하나를 배너로 만들자
            const index = Math.floor(
                Math.random() * request.data.results.length
            );
            setData(request.data.results[index]);
            return request;
        };

        getItems();
    }, [param.fetchURL]);

    //console.log(data);

    const truncate = (value?: string, maxLength?: number) => {
        // description 이 너무 크면 maxlength 만큼 자르고 ... 붙이기
        if (typeof value === 'undefined' || typeof maxLength === 'undefined') {
            return value;
        }
        return value?.length > maxLength
            ? value.substr(0, maxLength - 1) + '...'
            : value;
    };

    let background = '';
    if (data) {
        background = IMG_BASE_URL + data?.backdrop_path;
        //console.log(background);
    }

    return (
        <>
            <header
                className='banner_img'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center center',
                }}>
                <div className='banner_content'>
                    <h1 className='banner_title'>
                        {data?.title || data?.original_title}
                    </h1>
                    <div>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                    </div>
                    <h1 className='banner_description'>
                        {truncate(data?.overview, 150)}
                    </h1>
                </div>
                <div className='banner_fade_bottom' />
            </header>
        </>
    );
};
