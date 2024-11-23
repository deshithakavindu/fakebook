import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NavBar.css'; 
export default function NavBar() {
  return (
    <div className="NavBarBox">

        <div className="navBarLeft">
             <span className="logo">facebook</span>
        </div>

        <div className="navBarCenter">
            <div className="searchBarBox">
            <SearchIcon className='searchIcon'/>
            <input placeholder='search your friend' className="searchInput"/>
            </div>
        </div>

        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">Homepage</span>
                <span className="navBArLink">Profile</span>
            </div>

            <div className="navBarIcons">
                <div className="navBArIcon">
                      <PersonIcon/>  
                      <span className="iconTag">3</span>
                </div>

                <div className="navBArIcon">
                      <MessageIcon/>
                      <span className="iconTag">2</span>
                </div>

                <div className="navBArIcon">
                      <SettingsIcon/>
                      <span className="iconTag">1</span>
                </div>

            </div>
             
             <div className="pic">
                <img src="/images/1.jpg" alt="" className="profilepicimg" />
             </div>
        </div>

            
    </div>
  )
}
