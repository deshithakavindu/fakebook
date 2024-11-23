import React from 'react';
import './Post.css'; 

export default function Post() {
  return (
    <div className='Post'>
      <div className="PostContainer">

        {/* Post Header */}
        <div className="PostTop">
          <img src="/images/2.jpg" alt="Profile" className="PostProfileImage" />
          <div className="PostUserInfo">
            <span className="PostUserName">Luke Skywalker</span>
            <span className="PostTime">5 mins ago</span>
          </div>
        </div>

        {/* Post Body */}
        <div className="PostCenter">
          <div className="PostCaption">
            Just returned from an amazing journey to the far side of the galaxy!
          </div>
          <img src="/images/2.jpg" alt="Post content" className="PostContentImage" />
        </div>

        {/* Post Actions */}
        <div className="PostBottom">
          <div className="PostActions">
            <div className="PostAction">
              <span className="LikeButton">👍 Like</span>
            </div>
            <div className="PostAction">
              <span className="CommentButton">💬 Comment</span>
            </div>
            <div className="PostAction">
              <span className="ShareButton">🔗 Share</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
