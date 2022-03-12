import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    
    return(
            <div className='widgetLg'>
                <h3 className='widgetLgTitle'>Latest Trasactions</h3>
                <table className='widgetLgTable'>
                    <tr className='widgetLgTr'>
                        <th className='widgetLgTh'>Customer</th>
                        <th className='widgetLgTh'>Date</th>
                        <th className='widgetLgTh'>Amount</th>
                        <th className='widgetLgTh'>Status</th>
                    </tr>

                    <tr className='widgetLgTr'>
                        <td className='widgetLgUser'>
                            <img src='https://media.istockphoto.com/vectors/vector-best-seller-ribbon-medal-vector-id1194391202?k=20&m=1194391202&s=612x612&w=0&h=ns803wdedd86kr0HPM9A_nfon5zVI6RNvvAlxCzOanE=' alt='' className='widgetLgImg'/>
                            <span className='widgetLgName'>Talha Tariq</span>
                        </td>

                        <td className='widgetLgDate'> 18 Feb 2022</td>
                        <td className='widgetLgAmount'> $2200</td>
                        <td className='widgetLgStatus'>
                        <Button type="Approved" /> 
                        </td>
                    </tr>

                    <tr className='widgetLgTr'>
                        <td className='widgetLgUser'>
                            <img src='https://media.istockphoto.com/vectors/vector-best-seller-ribbon-medal-vector-id1194391202?k=20&m=1194391202&s=612x612&w=0&h=ns803wdedd86kr0HPM9A_nfon5zVI6RNvvAlxCzOanE=' alt='' className='widgetLgImg'/>
                            <span className='widgetLgName'>Talha Tariq</span>
                        </td>

                        <td className='widgetLgDate'> 18 Feb 2022</td>
                        <td className='widgetLgAmount'> $2200</td>
                        <td className='widgetLgStatus'>
                        <Button type="Declined" /> 
                        </td>
                    </tr>

                    <tr className='widgetLgTr'>
                        <td className='widgetLgUser'>
                            <img src='https://media.istockphoto.com/vectors/vector-best-seller-ribbon-medal-vector-id1194391202?k=20&m=1194391202&s=612x612&w=0&h=ns803wdedd86kr0HPM9A_nfon5zVI6RNvvAlxCzOanE=' alt='' className='widgetLgImg'/>
                            <span className='widgetLgName'>Talha Tariq</span>
                        </td>

                        <td className='widgetLgDate'> 18 Feb 2022</td>
                        <td className='widgetLgAmount'> $2200</td>
                        <td className='widgetLgStatus'>
                        <Button type="Pending" /> 
                        </td>
                    </tr>

                    <tr className='widgetLgTr'>
                        <td className='widgetLgUser'>
                            <img src='https://media.istockphoto.com/vectors/vector-best-seller-ribbon-medal-vector-id1194391202?k=20&m=1194391202&s=612x612&w=0&h=ns803wdedd86kr0HPM9A_nfon5zVI6RNvvAlxCzOanE=' alt='' className='widgetLgImg'/>
                            <span className='widgetLgName'>Talha Tariq</span>
                        </td>

                        <td className='widgetLgDate'> 18 Feb 2022</td>
                        <td className='widgetLgAmount'> $2200</td>
                        <td className='widgetLgStatus'>
                        <Button type="Approved" /> 
                        </td>
                    </tr>
                </table>
            </div>
    )
}
