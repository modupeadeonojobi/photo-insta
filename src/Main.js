import React, { Component } from 'react';
import Title from './components/Title';
import Photowall from './components/Photowall';
import AddPhoto from './components/AddPhoto';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Main extends Component {


  // handleDelete = (postId) => {
  //   const post = this.state.posts.filter(p => p.id !== postId);
  //   this.setState({ posts: post });
  // }

  // handleAddPhoto = (newPost) => {
  //   const posts = [...this.state.posts, newPost]
  //   this.setState({ posts: posts });
  //   console.log(posts);
  // }



  render() {
    console.log(this.props.posts);
    return (
      <BrowserRouter>
        <Title title={'Photowall'} />
        <Switch>
          <Route exact path="/">
            {/* <Photowall posts={this.state.posts} onDelete={this.handleDelete} /> */}
          </Route>
          {/* <Route path="/add-photo" render={({ history }) => (
            <AddPhoto onAddPhoto={(addedPost) => {
              this.handleAddPhoto(addedPost);
              history.push("/");
            }} />

          )} /> */}
          {/* <Route path="/add-photo">
            <AddPhoto onAddPhoto={(addedPost) => {
              this.handleAddPhoto(addedPost);
              this.history.push("/");
            }} />
          </Route> */}
        </Switch>
      </BrowserRouter>
    );
  }
}


export default Main;
