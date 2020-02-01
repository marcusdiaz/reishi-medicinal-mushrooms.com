import React from 'react';
import { Link } from 'react-router-dom';


class PostItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //this.props && console.log(this.author);
    console.log(this.props);
    return( 
      <div className="PostItem">
          ID: {this.props.post.id}<br/>
          Author: {this.props.post.author}<br/>
          Title: {this.props.post.title}<br/>
          Summary: {this.props.post.summary}<br/>
    Link: <Link to={{
      pathname: this.props.post.url,
      state: {
        post: this.props.post,
        pathname: this.props.post.url,
      }}}>{this.props.post.title}</Link>
      </div>
    );
  }
}

export default PostItem;

