import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';


const Photowall = ({ posts, onDelete }) => {
  return (
    <div className="photo-grid">
      {posts.map((post, index) => <Photo post={post} key={index} onDelete={onDelete} />)}
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Photowall;