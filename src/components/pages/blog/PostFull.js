import React from 'react';
import { Link } from 'react-router-dom';


class PostFull extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //this.props && console.log(this.author);
    console.log(this.props);
    return( 
      <div>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.txt}</p>
      </div>
    );
  }
}

export default PostFull;

