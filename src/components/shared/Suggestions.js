import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannels } from 'reducers/channel';
import SuggestionSkeleton from 'components/skeleton/SuggestionSkeleton';
import { StyledTrending } from 'styles/StyledScreen';
import ChannelInfo from 'components/channels/ChannelInfo';


const Suggestions = () => {
    const dispatch = useDispatch();
    const { isFetching, channels } = useSelector(
        (state) => state.channelRecommendation
    );

    useEffect(() => {
        dispatch(getChannels());
    }, [dispatch]);

    if (isFetching) {
        return <SuggestionSkeleton />;
    }

    return (
        <StyledTrending>
            <h2>Suggestions For You</h2>
            {channels?.map((channel) => (
                <ChannelInfo key={channel.id} channel={channel} />
            ))}
        </StyledTrending>
    );
};

export default Suggestions;