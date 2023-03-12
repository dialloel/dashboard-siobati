import React from 'react'
import './topbar.css';
import {GrLanguage} from 'react-icons/gr'
import {RiNotification2Line } from 'react-icons/ri'
import {FiSettings } from 'react-icons/fi'


const  Topbar = ()=> {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Siobati admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <RiNotification2Line/>
            <span className="topIconBag">2</span>

          </div>
          <div className="topbarIconContainer">
            <GrLanguage/>
            <span className="topIconBag">2</span>

          </div>
          <div className="topbarIconContainer">
            <FiSettings/>
          </div>
          <img src="data:image/jpeg;base64,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" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar;


