import React, { useState } from 'react'
import "./sellerList.css"
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"; 
import { sellerRows} from '../dummyData';


export default function SellerList() {

    const [data,setData] = useState(sellerRows);  

    const handleDelete =(id)=>{
        setData(data.filter(item=>item.id !== id))
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Buyer', headerName: 'Buyer Name', width: 130, renderCell: (params)=>{
            return(
                <div className='sellerSellerName'>
                    <img className='sellerImage' src={params.row.avatar} alt=""/>
                    {params.row.BuyerName}
                </div>
            )
        } },
        {field: 'productname', headerName: 'Product Name', width: 120},
        { field: 'email', headerName: 'Email', width: 180 },
        // {field: 'CNIC', headerName: 'CNIC', width: 120, },
        {field: 'city', headerName: 'City', width: 90, },
        {field: 'address', headerName: 'Address', width: 200, },
        {field: 'phone', headerName: 'Phone', width: 130, },
        {field: 'action', headerName: 'Action', width: 150, renderCell: (params) =>{
            return(
                <>
                <Link to={"/Buyer"+params.row.id}>
                <button className='sellerListApprove'>Approve</button>
                </Link>
                <button className='sellerListDecline' onClick={()=> handleDelete(params.row.id)}>Decline</button>
                </>
            )
        }}

        ];
      

    return (
        <div className='sellerList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={20} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    )
}