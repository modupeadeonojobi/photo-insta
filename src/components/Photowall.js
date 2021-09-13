import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Photowall = ({ posts, onDelete }) => {
  return (
    <div>
      <Link className="add-icon" to="/add-photo"> </Link>
      <div className="photo-grid">
        {posts.sort((a, b) => {
          return b.id - a.id;
        }).map((post, index) => <Photo post={post} key={index} onDelete={onDelete} />)}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Photowall;