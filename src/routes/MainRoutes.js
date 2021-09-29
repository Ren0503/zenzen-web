import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import Navbar from 'components/core/Navbar';
import Sidebar from 'components/core/Sidebar';
import BottomBar from 'components/core/BottomBar';
import ScrollToTop from 'components/core/ScrollToTop';

import Container from 'styles/Container';

import Home from 'screens/Home';
import Channel from 'screens/Channel';
import WatchVideo from 'screens/Videos';
import Library from 'screens/Feed/Library';
import History from 'screens/Feed/History';
import Trending from 'screens/Feed/Trending';
import LikedVideos from 'screens/Feed/LikedVideos';
import SearchResults from 'screens/Feed/SearchResult';
import Subscriptions from 'screens/Feed/Subscriptions';

const MainRoutes = () => (
    <Router>
        <ScrollToTop />
        <Navbar />
        <Sidebar />
        <BottomBar />
        <Container>
            <Switch>
                <Route path="/watch/:videoId" component={WatchVideo} />
                <Route path="/channel/:userId" component={Channel} />
                <Route path="/results/:searchTerm" component={SearchResults} />
                <Route path="/feed/trending" component={Trending} />
                <Route path="/feed/subscriptions" component={Subscriptions} />
                <Route path="/feed/library" component={Library} />
                <Route path="/feed/history" component={History} />
                <Route path="/feed/liked_videos" component={LikedVideos} />
                <Route path="/feed/my_videos" component={Channel} />
                <Route path="/" component={Home} />
                <Redirect path="" />
            </Switch>
        </Container>
    </Router>
);

export default MainRoutes;