import styled from 'styled-components';

export const StyledHome = styled.div`
    padding: 1.3rem;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 7rem;

    h2 {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 1093px) {
        width: 95%;
    }

    @media screen and (max-width: 1090px) {
        width: 99%;
    }

    @media screen and (max-width: 870px) {
        width: 90%;
    }

    @media screen and (max-width: 670px) {
        width: 99%;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
    }

    @media screen and (max-width: 530px) {
        width: 100%;
    }
`;

export const StyledAuth = styled.div`
    width: 385px;
    padding: 3rem 1.5rem;
    background: ${(props) => props.theme.grey};
    border-radius: 4px;
    margin: 8% auto;

    h2 {
        margin-bottom: 1.3rem;
    }

    .input-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .input-group input:last-child {
        margin-left: 0.7rem;
    }

    input {
        overflow: hidden;
        border-radius: 3px;
        width: 100%;
        padding: 0.6rem 1.2rem;
        background: ${(props) => props.theme.black};
        border: 1px solid ${(props) => props.theme.black};
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.primaryColor};
    }

    .action {
        margin-top: 1rem;
    }

    button {
        padding: 0.4rem 1rem;
        background: ${(props) => props.theme.red};
        color: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.red};
        border-radius: 3px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    span {
        letter-spacing: 0.8px;
        color: ${(props) => props.theme.secondaryColor};
    }

    @media screen and (max-width: 430px) {
        margin: 20% auto;
        width: 90%;
    }
`;

export const StyledTrending = styled.div`
    padding: 1rem 1.3rem;
    width: 85%;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 7rem;
    padding-bottom: ${(props) => (props.nopad ? "0.5rem" : "7rem")};

    @media screen and (max-width: 930px) {
        width: 95%;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const StyledChannels = styled.div`
    margin-top: 1rem;
`;