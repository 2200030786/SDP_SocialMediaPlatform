import React from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import './HomePage.css'; // Import the CSS file for HomePage
import profile from './profile.jpg';
import post1 from './post1.jpg';
import post2 from './post2.jpg';
import otherprofile1 from './otherprofile1.jpg'; // Import other profile images
import otherprofile2 from './otherprofile2.jpg'; // Import other profile images
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="sidebar-left">
        <Card className="profile-card">
          <CardContent>
            {/* Profile details */}
            <img className="profile-image" src={profile} alt="Profile" />
            <h3>vivekravikanti</h3>
            <p>Followers: 2</p>
          </CardContent>
          <CardActions>
          <Link to="/profilepage">
              <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>View Profile</Button>
            </Link>
          </CardActions>
        </Card>
        <Card className="followers-card">
          <CardContent>
            {/* Followers list */}
            <h3>Followers</h3>
            <ul className="followers-list">
              <li>
                <div className="follower-profile">
                  <img className="follower-profile-image" src={otherprofile1} alt="Follower Profile" />
                  <span className="follower-username">Bren</span>
                  <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>Following</Button>
                </div>
              </li>
              <li>
                <div className="follower-profile">
                  <img className="follower-profile-image" src={otherprofile2} alt="Follower Profile" />
                  <span className="follower-username">Sara</span>
                  <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>Following</Button>
                </div>
              </li>
              {/* Add more followers as needed */}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="main-content">
        <div className="posts-section">
          {/* Posts */}
          <Card className="post-card">
            <img className="post-image" src={post1} alt="Post" />
            <CardContent>
              <h3>Sai Pallavi and her elegance</h3>
              <p>The new look people are obsessed of....</p>
            </CardContent>
            <CardActions>
              <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>Like</Button>
              <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>Share</Button>
              <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>Follow</Button>
            </CardActions>
          </Card>
          <Card className="post-card">
            <img className="post-image" src={post2} alt="Post" />
            <CardContent>
              <h3>Magic of Food</h3>
              <p>Drown in the world of chole</p>
            </CardContent>
            <CardActions>
            <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>Like</Button>
              <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>Share</Button>
              <Button size="small" style={{ color: 'white', backgroundColor: 'purple' }}>Follow</Button>
            </CardActions>
          </Card>
          {/* Add more posts as needed */}
        </div>
      </div>
      <div className="sidebar-right">
        {/* Chat section */}
        <Card className="chat-card">
          <CardContent>
            <h3>Chats</h3>
            <ul className="chat-list">
              <li className="chat-message">
                <img className="other-profile-image" src={otherprofile1} alt="Other Profile" />
                <span className="username">Bren</span>
                <span>Hello, how are you?</span>
              </li>
              <li className="chat-message">
                <img className="other-profile-image" src={otherprofile2} alt="Other Profile" />
                <span className="username">Sara</span>
                <span>Hey there! I'm doing great, thanks.</span>
              </li>
              {/* Add more chat messages as needed */}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;