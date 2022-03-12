import React from 'react'
import "./widgetSm.css"
import {VisibilityOutlined} from "@material-ui/icons"

export default function WidgetSm() {
    return(
            <div className='widgetSm'>
                <span className='widgetSmTitle'> New Buyers </span>
                <ul className='widgetSmList'>
                    <li className='widgetSmListItem'>
                        <img src='https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=' alt='' className='widgetSmImg' />
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>Saad Khan</span>
                            <span className='widgetSmUserTitle'>Electronics</span>
                        </div>
                        <button className='widgetSmButton'>
                            <VisibilityOutlined className='widgetSmIcon'/>
                            Display
                        </button>
                    </li>

                    <li className='widgetSmListItem'>
                        <img src='https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=' alt='' className='widgetSmImg' />
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>Saad Khan</span>
                            <span className='widgetSmUserTitle'>Electronics</span>
                        </div>
                        <button className='widgetSmButton'>
                            <VisibilityOutlined className='widgetSmIcon'/>
                            Display
                        </button>
                    </li>

                    <li className='widgetSmListItem'>
                        <img src='https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=' alt='' className='widgetSmImg' />
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>Saad Khan</span>
                            <span className='widgetSmUserTitle'>Electronics</span>
                        </div>
                        <button className='widgetSmButton'>
                            <VisibilityOutlined  className='widgetSmIcon'/>
                            Display
                        </button>
                    </li>


                    <li className='widgetSmListItem'>
                        <img src='https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=' alt='' className='widgetSmImg' />
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>Saad Khan</span>
                            <span className='widgetSmUserTitle'>Electronics</span>
                        </div>
                        <button className='widgetSmButton'>
                            <VisibilityOutlined  className='widgetSmIcon'/>
                            Display
                        </button>
                    </li>


                    <li className='widgetSmListItem'>
                        <img src='https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=' alt='' className='widgetSmImg' />
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>Saad Khan</span>
                            <span className='widgetSmUserTitle'>Electronics</span>
                        </div>
                        <button className='widgetSmButton'>
                            <VisibilityOutlined className='widgetSmIcon'/>
                            Display
                        </button>
                    </li>
                </ul>

            </div>
    )
}
