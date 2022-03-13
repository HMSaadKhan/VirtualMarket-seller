import React from "react";
import "./sellerProduct.css";
import { DataGrid } from "@mui/x-data-grid";
import { useHistory } from "react-router-dom";

export default function SellerProduct(props) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Seller",
      headerName: "Product",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="sellerSellerProduct">
            <img className="productImage" src={params.row.avatar} alt="" />
            {params.row.ProductName}
          </div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 180 },
    { field: "shopname", headerName: "Shop Name", width: 150 },
    { field: "statusbar", headerName: "Status", width: 90 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="productListApprove" onClick={(e)=>{props.history.push("/updateProduct")}}>Edit</button>
            <button className="productListDecline">Delete</button>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 2,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 3,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 4,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 5,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 6,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 7,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 8,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 9,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
    {
      id: 10,
      ProductName: "Air Conditioner",
      category: "Electronics",
      avatar:
        "https://previews.123rf.com/images/stalkerstudent/stalkerstudent1509/stalkerstudent150902097/45491493-air-conditioner-icon-flat-design-style.jpg",
      shopname: "Haier",
      statusbar: "Active",
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
