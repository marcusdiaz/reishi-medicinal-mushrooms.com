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
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom">
            {this.props.post.title}
          </h3>

          <div class="blog-post">
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
                    }}}>
                      {this.props.post.title}
                    </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;

