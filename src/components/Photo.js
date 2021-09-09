import React from 'react';


const Photo = ({ post }) => {
  return (

    <figure className="figure">
      <img src={post.imageLink} alt={post.description} className="photo" />
      <figcaption>
        <p> {post.description} </p>
      </figcaption>
      <div className="button-container">
        <button className="button">
          Remove
        </button>
      </div>
    </figure>
  )
}


export default Photo;