import React, { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    margin-left: 30px;
    cursor: pointer;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ScrollableContainer = (props: { children: React.ReactNode }) => {
    const [pos, setPos] = useState<number>(0);
    const [drag, setDrag] = useState<boolean>(false);
    const container = useRef<HTMLDivElement>(null);

    const mouseDownHandler = (event: React.MouseEvent) => {
        if (container.current !== null) {
            event.preventDefault();
            setDrag(true);
            setPos(event.pageX + container.current?.scrollLeft);
        }
    };
    const mouseUpHandler = () => {
        if (container.current) {
            setDrag(false);
        }
    };
    const mouseMoveHandler = (event: React.MouseEvent) => {
        if (drag === true) {
            if (container.current !== null) {
                // 직접접근이 안되는데 이유를 찾아보자
                const target = container.current;
                target.scrollLeft = pos - event.pageX;
            }
        }
    };

    return (
        <Container
            onMouseDown={mouseDownHandler}
            onMouseUp={mouseUpHandler}
            onMouseMove={mouseMoveHandler}
            ref={container}>
            {props.children}
        </Container>
    );
};
