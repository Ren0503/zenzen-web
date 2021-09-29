import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StyledTrending, StyledChannels } from 'styles/StyledScreen';
import ChannelInfo from 'components/channels/ChannelInfo';
import NoResults from 'components/shared/NoResult';
import { useDispatch, useSelector } from 'react-redux';
import TrendingCard from 'components/shared/TrendingCard';
import TrendingSkeleton from 'components/skeleton/TrendingSkeleton';
import { getSearchResults, clearSearchResults } from 'reducers/search';

const SearchResults = () => {
    const { searchTerm } = useParams();
    const dispatch = useDispatch();
    const { isFetching, users, videos } = useSelector(state => state.searchResult);
    
    useEffect(() => {
        dispatch(getSearchResults(searchTerm));

        return () => {
            dispatch(clearSearchResults());
        }
    }, [dispatch, searchTerm]);

    if (isFetching) {
        return <TrendingSkeleton title="true" />;
    }

    if (!isFetching && !videos.length && !users.length) {
        return <NoResults title="No results found" text="Try different keywords" />;
    }

    return (
        <StyledTrending>
            <h2>Search Results</h2>

            <StyledChannels>
                {!isFetching &&
                    users.map((channel) => (
                        <ChannelInfo key={channel.id} search={true} channel={channel} />
                    ))}
            </StyledChannels>

            {!isFetching && videos.map((video) => (
                <Link key={video.id} to={`/watch/${video.id}`}>
                    <TrendingCard video={video} />
                </Link>
            ))}
        </StyledTrending>
    );
}

export default SearchResults;