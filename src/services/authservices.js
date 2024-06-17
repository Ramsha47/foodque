// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

const login = async (useremail, password) => {
  const response = await axios.post(`${API_URL}/login/`, { useremail, password });
  if (response.data.user) {
    sessionStorage.setItem('user', JSON.stringify(response.data.user));
    sessionStorage.setItem('access', response.data.access);
    sessionStorage.setItem('refresh', response.data.refresh);
  }
  return response;
};

const logout = () => {
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('access');
  sessionStorage.removeItem('refresh');
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

const getAccessToken = () => {
  return sessionStorage.getItem('access');
};

export default {
  login,
  logout,
  getCurrentUser,
  getAccessToken
};
