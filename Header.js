import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import { IconButton, Drawer, Badge } from '@material-ui/core';
import { Home, Notifications } from '@material-ui/icons';
import logo from './logo.jpeg';

function Header() {
  const [notifications] = useState([
    { id: 1, message: 'A new message from Bren' },
    { id: 2, message: 'A new message from Sara' },
  ]);

  const [openDrawer, setOpenDrawer] = useState(false);

  const getNotificationCount = () => {
    return notifications.length;
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </Link>
      </div>
      <Link to=" __">
          <IconButton className="navbar__button">
           Online Social Media Platform 
          </IconButton>
        </Link>
      <div className="navbar__right">
        <Link to="/homepage">
          <IconButton className="navbar__button">
            <Home />
          </IconButton>
        </Link>
        <Link to="/login">
          <IconButton className="navbar__button">
            Login
          </IconButton>
        </Link>
        <Link to="/join">
          <IconButton className="navbar__button">
            Join Our Community
          </IconButton>
        </Link>
        <IconButton className="navbar__button" onClick={() => setOpenDrawer(true)}>
          <Badge badgeContent={getNotificationCount()} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
      </div>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: 'drawer' }}
      >
        <div>
          {notifications.length === 0 ? (
            <p>No notifications</p>
          ) : (
            <div>
              {notifications.map(notification => (
                <p key={notification.id}>{notification.message}</p>
              ))}
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
}

export default Header;