import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="john"/>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder='john Smith' />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder='john@gmail.com' />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="number" placeholder='+1 438 998 3396' />
            </div>
            <div className="newUserItem">
                <label>Adress</label>
                <input type="text" placeholder='Montréal - Canada' />
                
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                <input type="radio" name='gender' id='male' value="male" />
                <label for='male'>Male</label>
                <input type="radio" name='gender' id='female' value="female" />
                <label for='female'>Female</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className='newUserSelect' name="active" id="active">
                    <option value="yes" >Yes</option>
                    <option value="no" >No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
