import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Avatar from 'styles/Avatar';

const Wrapper = styled.div`
    .thumb {
        width: 100%;
        height: 145px;
        object-fit: cover;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .video-info-container {
        display: flex;
        margin-top: 0.3rem;
    }

    .channel-avatar img {
        position: relative;
        top: 5px;
    }

    .video-info span {
        font-size: 0.9rem;
        padding-right: 0.1rem;
    }

    @media screen and (max-width: 600px) {
        .thumb {
        height: 250px;
        }
    }

    @media screen and (max-width: 420px) {
        .thumb {
        height: 200px;
        }
    }
`;

const VideoCard = ({ noUsername, hideAvatar, video }) => {
    return (
        <Wrapper>
            <img src={video.thumbnail} className="thumb" alt="thumbnail" />
            <div className="video-info-container">
                <div className="channel-avatar">
                    {!hideAvatar && (
                        <Avatar
                            style={{ marginRight: "0.8rem" }}
                            src={video.User.avatar}
                            alt="channel avatar"
                        />
                    )}
                </div>
                <div className="video-info">
                    <h4>
                        {video.title.length > 40
                            ? video.title.substring(0, 40) + "...."
                            : video.title}
                    </h4>
                    {!noUsername && (
                        <span className="secondary">{video.User.username}</span>
                    )}
                    <p className="secondary">
                        <span>{video.views || 0} views</span> 
                        <span>•</span>{" "}
                        <span>{moment(video.createdAt).fromNow()}</span>
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

export default VideoCard;