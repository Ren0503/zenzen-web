import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Suggestions from 'components/shared/Suggestions';
import HomeSkeleton from 'components/skeleton/HomeSkeleton';
import VideoCard from 'components/videos/VideoCard';
import { StyledHome } from 'styles/StyledScreen';
import VideoGrid from 'styles/VideoGrid';
import { getFeed } from 'reducers/feed';

const Subscriptions = () => {
    const dispatch = useDispatch();
    const { isFetching, videos } = useSelector(state => state.feed);

    useEffect(() => {
        dispatch(getFeed());
    }, [dispatch]);

    if (isFetching) {
        return <HomeSkeleton />
    }

    if (!isFetching && !videos.length) {
        return <Suggestions />
    }

    return (
        <StyledHome>
            <div style={{ marginTop: "1.5rem"}}></div>

            <VideoGrid>
                {!isFetching && videos.map((video) => (
                    <Link key={video.id} to={`/watch/${video.id}`}>
                        <VideoCard hideAvatar={true} video={video} />
                    </Link>
                ))}
            </VideoGrid>
        </StyledHome>
    );
}

export default Subscriptions;