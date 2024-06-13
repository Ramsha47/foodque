// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

const login = async (useremail, password) => {
  const response = await axios.post(`${API_URL}/login/`, { useremail, password });
  if (response.data.user) {
    sessionStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response;
};

const logout = () => {
  sessionStorage.removeItem('user');
};

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    });
  };
  

export default {
  login,
  logout,
  getCurrentUser
};
