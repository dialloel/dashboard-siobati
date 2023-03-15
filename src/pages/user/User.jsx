import React  from 'react'
import './user.css'
import {MdPermIdentity,MdPublish} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to= "/newUser">
            <button className='userAddButton'>Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
            <div className="userShowTop">
                <img src="data:image/jpeg;base64,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" alt="" className='userShowImg'/>
                <div className="userShowTopTitle">
                  <span className="userShowUserName">Modou Mbaye</span>  
                  <span className="userShowUserTitle">Software Engeneer</span>  
                </div>
            </div>
            <div className="userShowBotom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
              <MdPermIdentity className='userShowIcon'/>
              <span className="userShowInfoTitle">Modou</span>
              </div>
              <div className="userShowInfo">
              <FaBirthdayCake className='userShowIcon'/>
              <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
              <AiOutlinePhone className='userShowIcon'/>
              <span className="userShowInfoTitle">77 869 77 78</span>
              </div>
              <div className="userShowInfo">
              <AiOutlineMail className='userShowIcon'/>
              <span className="userShowInfoTitle">Modou@gmail.com</span>
              </div>
              <div className="userShowInfo">
              <GoLocation className='userShowIcon'/>
              <span className="userShowInfoTitle">Dakar - Senegal</span>
              </div>
            </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text" placeholder='modou' className='userUpdateInput' />
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Modou Mbaye' className='userUpdateInput' />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input type="text" placeholder='modou@gmail.com' className='userUpdateInput' />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input type="text" placeholder='77 869 77 78' className='userUpdateInput' />
                  </div>
                  <div className="userUpdateItem">
                    <label>Adress</label>
                    <input type="text" placeholder='Dakar - Senegal' className='userUpdateInput' />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img src="data:image/jpeg;base64,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" alt="" className="userUpdateImg" />
                    <label htmlFor="file"> <MdPublish className='userUpdateIcon'/> </label>
                    <input type="file" id="file" style = {{display:"none"}} />
                  </div>
                  <button className='userUpdateButton'>Update</button>
              
                </div>
              </form>

            </div>
        </div>
    </div>
  )
}
