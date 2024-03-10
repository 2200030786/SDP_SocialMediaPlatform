import React, { useState } from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import profilepost1 from './profilepost1.jpg';
import profilepost2 from './profilepost2.jpg';
import profilepost3 from './profilepost3.jpg';
import profilepost4 from './profilepost4.jpg';
import profilepost5 from './profilepost5.jpg';
import profile from './profile.jpg';

const ProfilePage = () => {
  // Example user data (replace with actual data fetched from backend)
  const userData = {
    followersCount: 2,
    profilePicture: profile,
    bio: 'Vijayawada, KL University, 2nd Year',
    posts: [
      { id: 1, imageUrl: profilepost1 },
      { id: 2, imageUrl: profilepost2 },
      { id: 3, imageUrl: profilepost3 },
      { id: 4, imageUrl: profilepost4 },
      { id: 5, imageUrl: profilepost5 }
    ]
  };

  // State to keep track of liked posts
  const [likedPosts, setLikedPosts] = useState([]);

  const handleFollow = () => {
    // Handle follow action
    console.log('Follow button clicked');
  };

  const handleBlock = () => {
    // Handle block action
    console.log('Block button clicked');
  };

  const handleLike = postId => {
    if (likedPosts.includes(postId)) {
      // Unlike post
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      // Like post
      setLikedPosts([...likedPosts, postId]);
    }
  };

  // Function to check if a post is liked
  const isPostLiked = postId => likedPosts.includes(postId);

  return (
    <div className="profile-page">
      <Card className="profile-card-custom" style={{ maxWidth: '900px', margin: '0 auto', padding: '80px' }}>
        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
          <img className="profile-picture" src={userData.profilePicture} alt="Profile" style={{ width: '100px', height: '90px', borderRadius: '50%', marginRight: '30px' }} />
          <div className="profile-info" style={{ flexGrow: '1' }}>
            <h2>Vivek Ravikanti</h2>
            <p>{userData.followersCount} Followers</p>
            <p>{userData.bio}</p>
            <Button variant="contained" color="grey" onClick={handleFollow}>Follow</Button>
            <Button variant="contained" color="secondary" onClick={handleBlock}>Block</Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="posts" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <h3>Posts</h3>
        <div className="post-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {userData.posts.map(post => (
            <Card key={post.id} className="post-card-custom" style={{ margin: '5px', maxWidth: '100px'}}>
              <img className="post-image" src={post.imageUrl} alt={`post ${post.id}`} />
              <Button onClick={() => handleLike(post.id)}>
                {isPostLiked(post.id) ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;