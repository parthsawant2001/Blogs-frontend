import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import '../App.css';

const Post = ({ _id, title, summary, content, cover, createdAt, author }) => {
  return (
    <div className='post'>
      <div className='image'>
        <Link to={`/post/${_id}`}>
          <img src={'https://blogs-api-s5vy.onrender.com/' + cover} alt='' />
        </Link>
      </div>
      <div className='content'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          <a href='' className='author'>
            {author.username}
          </a>
          <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
};

export default Post;
