import React from 'react'
import './Addpost.css'; 
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PlaceIcon from '@mui/icons-material/Place';
import SellIcon from '@mui/icons-material/Sell';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Addpost() {
  return (
    <div className='addPost'>
     <div className="addPostContainer">

        <div className="addPostTop">
          <img src="/images/1.jpg" alt="" className="addPostPic" />
          <input placeholder='whats in you mind?' type="text" className="addPostInput" />
        </div>

       <hr className='postHr'/>

        <div className="addPostBottom">
             <div className="addPostOptions">
                  <div className="addPostOption">
                  <InsertPhotoIcon className='addPhoto'/>
                  <span className="addPostOptionText">Add photo/Video</span>
                  </div>

                  <div className="addPostOption">
                  <PlaceIcon  className='addPhoto'/>
                  <span className="addPostOptionText">Add Location</span>
                  </div>

                  <div className="addPostOption">
                  <SellIcon className='addPhoto'/>
                  <span className="addPostOptionText">Tag</span>
                  </div>

                  <div className="addPostOption">
                  <LiveTvIcon className='addPhoto'/>
                  <span className="addPostOptionText"> Go Live</span>
                  </div>
             </div>
             <button className="PostButton">Post</button>
        </div>

     </div>
    </div>
  )
}
