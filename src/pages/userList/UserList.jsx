import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {AiOutlineDelete} from 'react-icons/ai'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom';

export default function UserList() {
    const [data,setData] =useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item)=> item.id !==id ) )
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User name', width: 130, renderCell: (params)=>{
            return (
                <div className='userListUser'>
                    <img className='userListImg' src= {params.row.avatar} alt =""/>
                    {params.row.username}

                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell:(params)=> {
                return (
                    <div>
                        <Link to={"/user/"+params.row.id}>
                        <button className='userListEdit'> Edit</button>
                        </Link>
                        <AiOutlineDelete className='userListDelete' onClick= { ()=>handleDelete(params.row.id) } />
                       

                    </div>
                   
                )
            }
          },
  

      ];
      
      
  return (
    <div className='userList'>
        <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      </div>
  )
}
