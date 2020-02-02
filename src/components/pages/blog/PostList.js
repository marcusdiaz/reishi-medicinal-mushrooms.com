import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.posts);

    let listFunc;

    if(this.props.posts) {
        listFunc = this.props.posts.map(post => <PostItem post={post} key={post.id}></PostItem>) 
    }
    
    return( 
      <div role="main" class="container">
      {listFunc}
      </div>
    );
  }
}

export default PostList;

