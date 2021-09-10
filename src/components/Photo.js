import React from 'react';


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


export default Photo;