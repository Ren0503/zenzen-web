import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendation } from 'reducers/recommendation';
import HomeSkeleton from 'components/skeleton/HomeSkeleton';
import VideoCard from 'components/videos/VideoCard';
import { StyledHome } from 'styles/StyledScreen';
import VideoGrid from 'styles/VideoGrid';

const Home = () => {
    const dispatch = useDispatch();
    const { isFetching, videos } = useSelector((state) => state.recommendation);

    useEffect(() => {
        dispatch(getRecommendation());
    }, [dispatch]);

    if (isFetching) {
        return <HomeSkeleton title={true}/>;
    }

    return (
        <StyledHome>
            <h2>Recommended</h2>

            <VideoGrid>
                {!isFetching && videos.map((video) => (
                    <Link key={video.id} to={`/watch/${video.id}`}>
                        <VideoCard video={video} />
                    </Link>
                ))}
            </VideoGrid>
        </StyledHome>
    );
}

export default Home;