import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLikedVideos } from 'reducers/liked';
import { StyledTrending } from 'styles/StyledScreen';
import { useDispatch, useSelector } from 'react-redux';
import TrendingCard from 'components/shared/TrendingCard';
import TrendingSkeleton from 'components/skeleton/TrendingSkeleton';

const LikedVideos = () => {
    const dispatch = useDispatch();
    const { isFetching, videos } = useSelector(state => state.likedVideo);

    useEffect(() => {
        dispatch(getLikedVideos());
    }, [dispatch]);

    if (isFetching) {
        return <TrendingSkeleton />;
    }

    return (
        <StyledTrending>
            <h2>Liked Videos</h2>

            {videos?.length === 0 && (
                <p className="secondary">
                    Videos that you have liked will show up here
                </p>
            )}

            {videos.map((video) => (
                <Link key={video.id} to={`/watch/${video.id}`}>
                    <TrendingCard video={video} />
                </Link>
            ))}
        </StyledTrending>
    );
}

export default LikedVideos;