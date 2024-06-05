import React from 'react';
import { Avatar, Switch, List, ListItem, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPhone, faTransgender, faTint, faBell, faLanguage } from '@fortawesome/free-solid-svg-icons';
import './../../assets/css/userProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <div className="user-profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="user-profile-content">
        <div className="user-header">
          <Avatar
            alt="User Avatar"
            src="https://www.google.com/imgres?q=profile%20pic%20human&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F014%2F194%2F198%2Foriginal%2Favatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F14194198-avatar-icon-human-a-person-s-badge-vector-social-media-profile-symbol-the-symbol-of-a-person&docid=Yw9fk9jmgXxkBM&tbnid=U3gjC0WKXxNr6M&vet=12ahUKEwiY3InG7a6GAxWCcfEDHT64CQQQM3oECCsQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwiY3InG7a6GAxWCcfEDHT64CQQQM3oECCsQAA"
            className="user-avatar"
          />
          <div className="user-basic-info">
            <h3 className="user-name">Jannie Regel</h3>
            <p className="user-rating">
              <span className="star-rating">★★★★☆</span> 214 rates
            </p>
            <p className="user-trust">85% trust</p>
          </div>
        </div>
        <div className="user-details-section">
          <div className="user-profile-card">
            <div className="user-details">
              <div className="user-detail-item">
                <FontAwesomeIcon icon={faTransgender} className="detail-icon" />
                <span>Gender:</span> Female
              </div>
              <div className="user-detail-item">
                <FontAwesomeIcon icon={faBirthdayCake} className="detail-icon" />
                <span>Date of Birth:</span> 23/02/1987
              </div>
              <div className="user-detail-item">
                <FontAwesomeIcon icon={faPhone} className="detail-icon" />
                <span>Phone number:</span> 263 281 480
              </div>
              <div className="user-detail-item">
                <FontAwesomeIcon icon={faTint} className="detail-icon" />
                <span>Blood type:</span> AB
              </div>
              <div className="user-detail-item">
                <FontAwesomeIcon icon={faBell} className="detail-icon" />
                <span>Notifications:</span>
                <Switch defaultChecked />
              </div>
              <div className="user-detail-item">
                <FontAwesomeIcon icon={faLanguage} className="detail-icon" />
                <span>Language:</span> English
              </div>
            </div>
          </div>
          <div className="user-plans">
            <div className="plan-card">
              <h3>Diet Plan</h3>
              <List>
                <ListItem>
                  <ListItemText primary="Breakfast: Oatmeal with fruits" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Lunch: Grilled chicken salad" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Dinner: Baked salmon with vegetables" />
                </ListItem>
              </List>
            </div>
            <div className="plan-card">
              <h3>Exercise Plan</h3>
              <List>
                <ListItem>
                  <ListItemText primary="Monday: Cardio and Abs" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Wednesday: Full Body Strength" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Friday: Yoga and Stretching" />
                </ListItem>
              </List>
            </div>
          </div>
          <div className="plan-card">
            <h3>Recommended Meals</h3>
            <List>
              <ListItem>
                <ListItemText primary="Avocado toast with eggs" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Quinoa and black bean bowl" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Smoothie with spinach and berries" />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
