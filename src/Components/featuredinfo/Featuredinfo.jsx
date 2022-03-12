import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import "./featuredinfo.css"

export default function Featuredinfo() {
    return(
        <div className="featured">
            <div className='featuredItem'>
                <span className='featuredTitle'>Revanue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$1200</span>
                    <span className='featureMoneyRate'>
                    -11 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>

                <span className='featuredSub'>Compare to last month</span>
            </div>
            
            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$4200</span>
                    <span className='featureMoneyRate'>
                    -1.2 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>

                <span className='featuredSub'>Compare to last month</span>
            </div>

            <div className='featuredItem'>
                <span className='featuredTitle'>Costs</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2200</span>
                    <span className='featureMoneyRate'>
                    +2.4 <ArrowUpward className='featuredIcon'/>
                    </span>
                </div>

                <span className='featuredSub'>Compare to last month</span>
            </div>

        </div>
    )
}