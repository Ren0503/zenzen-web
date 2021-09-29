import React from 'react';
import History from './History';
import LikedVideos from './LikedVideos';

const Library = () => (
    <>
        <History nopad={true} />
        <LikedVideos />
    </>
);

export default Library;