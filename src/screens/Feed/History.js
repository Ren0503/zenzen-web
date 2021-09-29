import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHistory } from 'reducers/history';
import { StyledTrending } from 'styles/StyledScreen';
import { useDispatch, useSelector } from 'react-redux';
import TrendingCard from 'components/shared/TrendingCard';
import TrendingSkeleton from 'components/skeleton/TrendingSkeleton';

const History = ({ nopad }) => {
    const dispatch = useDispatch();
    const { isFetching, videos } = useSelector(state => state.history);

    useEffect(() => {
        dispatch(getHistory());
    }, [dispatch]);

    if (isFetching) {
        return <TrendingSkeleton />;
    }

    return (
        <StyledTrending nopad={nopad}>
            <h2>History</h2>

            {!isFetching && !videos.length && (
                <p className="secondary">
                    Videos that you have watched will show up here
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

export default History;