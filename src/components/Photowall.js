import React from 'react';
import Photo from './Photo';

const Photowall = ({ posts }) => {
  return (
    <div className="photo-grid">
      {posts.map((post, index) => <Photo post={post} key={index} />)}
    </div>
  );
}

export default Photowall;