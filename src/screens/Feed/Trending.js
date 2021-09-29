import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'reducers/trending';
import { StyledTrending } from 'styles/StyledScreen';
import { useDispatch, useSelector } from 'react-redux';
import TrendingCard from 'components/shared/TrendingCard';
import TrendingSkeleton from 'components/skeleton/TrendingSkeleton';

const Trending = () => {
    const dispatch = useDispatch();
    const { isFetching, videos } = useSelector(state => state.trending);

    useEffect(() => {
        dispatch(getTrending());
    }, [dispatch]);

    if (isFetching) {
        return <TrendingSkeleton />;
    }

    return (
        <StyledTrending>
            <h2>Trending</h2>

            <div className="trending">
                {!isFetching && videos.map((video) => (
                    <Link to={`/watch/${video.id}`} key={video.id}>
                        <TrendingCard video={video} />
                    </Link>
                ))}
            </div>
        </StyledTrending>
    );
}

export default Trending;