import React from 'react'
import './Leftpane.css'; 
import MessageIcon from '@mui/icons-material/Message';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';


export default function Leftpane() {
  return (
    <div className='leftpaneBox'>
      <div>
        <div className="leftPaneContainer">
          <div className="leftPaneMenu">
            <li className='leftPaneMenuItem'>
                  < MessageIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Messages</span>
            </li>

            <li className='leftPaneMenuItem'>
                  < GroupsIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Groups</span>
            </li>

            <li className='leftPaneMenuItem'>
                  <RssFeedIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Feeds</span>
            </li>

            <li className='leftPaneMenuItem'>
                  < FlagIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Pages</span>
            </li>

            <li className='leftPaneMenuItem'>
                  < CalendarMonthIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Events</span>
            </li>

            <li className='leftPaneMenuItem'>
                  < SettingsIcon  className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Settings</span>
            </li>

            <li className='leftPaneMenuItem'>
                  < SportsEsportsIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Games</span>
            </li>

            <li className='leftPaneMenuItem'>
                  < NewspaperIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">News</span>
            </li>

            <li className='leftPaneMenuItem'>
                  < WorkIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Jobs</span>
            </li>

            <li className='leftPaneMenuItem'>
                  < StoreIcon className='leftPaneMenuIcon'/>
                  <span className="leftPaneMenuText">Market</span>
            </li>
            <hr/>

            <div className="pagesYouLiked">
              <h3>Pages you liked</h3>
              <br />
            </div>
                  <div className="pageList">
                  <li className="pageListItem">
                    <img src="/images/1.jpg" alt="" className="pagePic" />
                    <span className="pagename">ass you</span>
                  </li>

                  <li className="pageListItem">
                    <img src="/images/1.jpg" alt="" className="pagePic" />
                    <span className="pagename">ass you</span>
                  </li>

                  <li className="pageListItem">
                    <img src="/images/1.jpg" alt="" className="pagePic" />
                    <span className="pagename">ass you</span>
                  </li>

                  <li className="pageListItem">
                    <img src="/images/1.jpg" alt="" className="pagePic" />
                    <span className="pagename">ass you</span>
                  </li>
                  </div>

          </div>
        </div>
      </div>
    </div>

  )
}
