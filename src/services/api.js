// src/services/api.js
export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

export const fetchUserDetails = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.json();
};

export const fetchUserPosts = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return response.json();
};
