import React from 'react'
import "./sidebar.css"
import {MdLineStyle,MdTimeline,MdOutlineDynamicFeed,MdOutlineManageAccounts,MdReport } from 'react-icons/md'
import {BiTrendingUp,BiMessage } from 'react-icons/bi'
import {AiOutlineUserSwitch,AiOutlineMail } from 'react-icons/ai'
import {BsFillBoxSeamFill,BsCashCoin } from 'react-icons/bs'
import {HiOutlineDocumentReport } from 'react-icons/hi'

const  Sidebar = () =>{
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className='sidebarIcon'/>
              Home
            </li>
            <li className="sidebarListItem">
              <MdTimeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <BiTrendingUp className='sidebarIcon'/>
              Sells
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <AiOutlineUserSwitch className='sidebarIcon'/>
              Users
            </li>
            <li className="sidebarListItem">
              <BsFillBoxSeamFill className='sidebarIcon'/>
              Products
            </li>
            <li className="sidebarListItem">
              <BsCashCoin className='sidebarIcon'/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <HiOutlineDocumentReport className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <AiOutlineMail className='sidebarIcon'/>
              Mail
            </li>
            <li className="sidebarListItem">
              <MdOutlineDynamicFeed className='sidebarIcon'/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <BiMessage className='sidebarIcon'/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MdOutlineManageAccounts className='sidebarIcon'/>
              Manage
            </li>
            <li className="sidebarListItem">
              <MdTimeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdReport className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}



export default Sidebar;
