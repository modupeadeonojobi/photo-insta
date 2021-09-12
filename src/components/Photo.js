import React from 'react';
import PropTypes from 'prop-types';


const Photo = ({ post, onDelete }) => {
  return (

    <figure className="figure">
      <img src={post.imageLink} alt={post.description} className="photo" />
      <figcaption>
        <p> {post.description} </p>
      </figcaption>
      <div className="button-container">
        <button className="button" onClick={() => onDelete(post.id)}>
          Remove
        </button>
      </div>
    </figure>
  );
}


Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}


export default Photo;