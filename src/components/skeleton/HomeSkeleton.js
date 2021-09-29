import React from 'react';
import VideoGrid from 'styles/VideoGrid';
import { StyledHome } from 'styles/StyledScreen';
import { SkeletonLine, VideoCardSkeleton } from 'styles/Skeleton';

const HomeSkeleton = ({ title }) => {
    return (
        <StyledHome>
            {!title && <SkeletonLine width="350px" height="30px" mb="30px" />}
            {!title && <div style={{ marginTop: "2rem" }} />}
            <VideoGrid>
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
                <VideoCardSkeleton />
            </VideoGrid>
        </StyledHome>
    );
}

export default HomeSkeleton;