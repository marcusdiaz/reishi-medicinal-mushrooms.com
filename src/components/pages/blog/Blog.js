import React from 'react';
import axios from 'axios';
//import axios_lh8k_cfg from '../../../utils/axios_lh8k_cfg';
import PostList from './PostList';
import posts from './Posts';
import PostFull from './PostFull';

class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {posts: posts};

  }

  componentDidMount() {
    const self = this;

    // axios_lh8k_cfg.get('/api/v1/posts/',{
    //   headers: {
    //     //Authorization: 'id' key
    //   }
    // }).then((response) => {
    //   self.setState({posts: response});
    // });
    
  }

  render() {
    if(this.props.location.state) {
        console.log(this.props.location.state.post);
        return(
          <div>
            {
            <PostFull post={this.props.location.state.post}/>
            }
          </div>
        );
    } else {
      return( 
        <div>
          {
            this.state && this.state.posts &&
            <PostList posts={this.state.posts}></PostList>
          }
        </div>
      );
    }
  
  }
}

export default Blog;

