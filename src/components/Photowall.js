import React from 'react';
import Photo from './Photo';

const Photowall = ({ posts, onDelete }) => {
  return (
    <div className="photo-grid">
      {posts.map((post, index) => <Photo post={post} key={index} onDelete={onDelete} />)}
    </div>
  );
}

// Photowall.propTypes = {
//   posts: propTypes.array.isRequired
//   onDelete: propTypes.funtion.isRequired
// }

export default Photowall;