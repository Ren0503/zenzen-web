import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Avatar from 'styles/Avatar';

const Wrapper = styled.div`
    .row {
        display: flex;
    }

    .col-6 {
        width: 50%;
    }

    .thumb {
        width: 100%;
        height: 100px;
        object-fit: cover;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
        padding: 0.2rem;
    }

    .video-info-container {
        display: flex;
        padding: 0.5rem;
        line-height: 1.2;
    }

    .channel-avatar img {
        position: relative;
        top: 5px;
    }

    .video-info span {
        font-size: 0.8rem;
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

const RelatedVideo = ({ noUsername, hideAvatar, video }) => {
    return (
        <Wrapper>
            <div className="row">
                <div className="col-6">
                    <img src={video.thumbnail} className="thumb" alt="thumbnail" />
                </div>
                <div className="col-6">
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
                                {video.title.length > 30
                                    ? video.title.substring(0, 30) + "...."
                                    : video.title}
                            </h4>
                            <div className="secondary">
                                {!noUsername && (
                                    <span>{video.User.username}</span>
                                )}
                                <div>
                                    <span>{video.views || 0} views</span>
                                    {" "}<span>•</span>{" "}
                                    <span>{moment(video.createdAt).fromNow()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default RelatedVideo;