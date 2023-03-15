import React from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import {AiOutlineDelete} from 'react-icons/ai'
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom';
import { useState } from "react"

export default function ProductList() {

    const [data,setData]= useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item)=> item.id !==id ) )
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
            return (
                <div className='productListItem'>
                    <img className='productListImg' src= {params.row.image} alt =""/>
                    {params.row.name}

                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell:(params)=> {
                return (
                    <div>
                        <Link to={"/product/"+params.row.id}>
                        <button className='productListEdit'> Edit</button>
                        </Link>
                        <AiOutlineDelete className='productListDelete' onClick= { ()=>handleDelete(params.row.id) } />
                       

                    </div>
                   
                )
            }
          },
  

      ];

  return (
    <div className='productList'>
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
