import React from 'react'
import './Postpane.css'; 
import Addpost from '../Addpost/Addpost';
import Post from '../Post/Post';

export default function Postpane() {
  return (
    <div className='PostpaneBox'>
      <Addpost/>
      <Post/>
       </div>
  
  )
}
