import React, { Component } from 'react';

class AddPhoto extends Component {

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Link" name="link" />
          <input type="text" placeholder="Description" name="description" />
          <button>Post</button>
        </form>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink
    }
    if (imageLink && description) {
      this.props.onAddPhoto(post)

    }

  }
}

export default AddPhoto;

