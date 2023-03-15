import React from 'react'
import { Link } from 'react-router-dom'
import "./product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import {MdPublish} from 'react-icons/md'

export default function Product() {
  return (
    <div  className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
            <Chart data= {productData} dataKey= "Sales" title= "Sales Performances" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop"></div>
                <img src='data:image/jpeg;base64,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' alt='' className='productInfoImg'/>
                <soan className="productName">Bouton Poussoir Zenith</soan>
                <div className="productinfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfokey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfokey">sales:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfokey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfokey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>

                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type= "text" placeholder='Bouton Poussoir Zenith' />
                    <label>In Stock</label>
                    <select name= "inStock" id="idStock" >
                       <option value="yes">Yes</option> 
                       <option value="no">No</option> 
                    </select>
                    <label>Active</label>
                    <select name= "active" id="active" >
                       <option value="yes">Yes</option> 
                       <option value="no">No</option> 
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="porductUpload">
                        <img src='data:image/jpeg;base64,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' alt='' className='productUploadImg' />
                        <label for="file">
                            <MdPublish/>
                        </label>
                        <input type ="file" id="file" style= {{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
