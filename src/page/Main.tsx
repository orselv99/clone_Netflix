import React from 'react';
import { Banner, Items } from '../component';
import { FETCH } from '../service';

export const Main = () => {
    return (
        <div>
            <Banner fetchURL={FETCH.topRated} isBackdrop={true} />
            <Items
                title='Trending'
                fetchURL={FETCH.trending}
                isBackdrop={false}
            />
            <Items
                title='Top Rated'
                fetchURL={FETCH.topRated}
                isBackdrop={true}
            />
            <Items title='Action' fetchURL={FETCH.action} isBackdrop={true} />
            <Items title='Horror' fetchURL={FETCH.horror} isBackdrop={true} />
            <Items title='Comedy' fetchURL={FETCH.comedy} isBackdrop={true} />
        </div>
    );
};
