import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Photowall = (props) => {
  return (
    <div>
      <Link className="add-icon" to="/add-photo"> </Link>
      <div className="photo-grid">
        {props.posts.sort((a, b) => {
          return b.id - a.id;
        }).map((post, index) => <Photo post={post} key={index} {...props} index={index} />)}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  // onDelete: PropTypes.func.isRequired
}

export default Photowall;