import React from 'react'
import "./featuredInfo.css"
import {AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featureTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2000fcfa</span>
                <span className="featuredMoneyRate">-11.4 <AiOutlineArrowDown className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">5000fcfa</span>
                <span className="featuredMoneyRate">-4 <AiOutlineArrowDown className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">3000fcfa</span>
                <span className="featuredMoneyRate">+4 <AiOutlineArrowUp className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
