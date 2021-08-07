import React from 'react';
import { useState, useEffect } from 'react';
import { ComponentParameters, ContentTypes, StyledProps } from '../type';
import { axiosInstance, IMG_BASE_URL } from '../service';
import styled from 'styled-components';

const BannerBackgroundImage = styled.header`
    color: white;
    object-fit: contain;
    height: 450px;
    background-size: cover;
    background-image: url(${(props: StyledProps) => props.imageURL});
    background-position: center;
`;
const BannerContent = styled.div`
    margin-left: 30px;
    padding-top: 150px;
`;
const BannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`;
const BannerButton = styled.button`
    cursor: pointer;
    color: white;
    outline: none;
    border: none;
    background-color: rgba(51, 51, 51, 0.5);

    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem 0.5rem 2rem;
    margin-right: 1rem;

    &:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`;
const BannerDescription = styled.h1`
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 400px;
`;
const BannerFadeBottom = styled.div`
    height: 140px;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.6),
        #111
    );
`;

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

    if (typeof data === 'undefined') {
        return null;
    }
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

    const background = IMG_BASE_URL + data.backdrop_path;
    //console.log(background);

    return (
        <BannerBackgroundImage imageURL={background}>
            <BannerContent>
                <BannerTitle>{data.title || data.original_title}</BannerTitle>
                <BannerButton>Play</BannerButton>
                <BannerButton>My List</BannerButton>
                <BannerDescription>
                    {truncate(data.overview, 150)}
                </BannerDescription>
            </BannerContent>
            <BannerFadeBottom />
        </BannerBackgroundImage>
    );
};
