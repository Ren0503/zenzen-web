import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { SearchIcon } from 'components/icons';

const Wrapper = styled.div`
    .search input {
        background: ${(props) => props.theme.black};
        padding: 0.4rem 1rem;
        border: 1px solid ${(props) => props.theme.darkGrey};
        height: 31px;
        color: ${(props) => props.theme.primaryColor};
    }

    .search button {
        border: none;
        outline: none;
        background: ${(props) => props.theme.darkGrey};
        padding: 0.36rem 1rem;
    }
    
    @media screen and (max-width: 700px) {
        .search {
            display: none;
        }
    }
`;

const Search = () => {
    const history = useHistory();
    const searchTerm = useInput('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchTerm.value.trim()) {
            return toast.dark("Please enter the searchTerm");
        }
        else {
            history.push(`/results/${searchTerm.value}`);
            searchTerm.setValue('');
        }

    };

    return (
        <Wrapper>
            <form onSubmit={handleSearch} className="search">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm.value}
                    onChange={searchTerm.onChange}
                />
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>
        </Wrapper>
    );
}

export default Search;