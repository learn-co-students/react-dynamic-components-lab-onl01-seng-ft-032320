import React, { Component } from 'react';
import BlogPost from './BlogPost.js';

// const { Component } = require("react");
const { render } = require("enzyme");

//your code here
class Comment extends Component{
   render(){
      return(
         <div className="comment">
            {this.props.commentText}
         </div>
      )
   }
}

export default Comment