import React from "react";

 import Create from './Create' ;
import ShowPost from './ShowPost';

const Posts = () => {
  return (
    <div className="posts">
     
       <Create /> 
      <ShowPost />
    </div>
  );
};

export default Posts;
