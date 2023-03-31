import React, { useEffect, useState } from 'react';
import '../App.css';
import Post from '../Components/Post';
const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blogs-api-s5vy.onrender.com/post').then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
};

export default IndexPage;
