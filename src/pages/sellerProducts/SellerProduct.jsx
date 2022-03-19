import React from "react";
import "./sellerProduct.css";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
export default function SellerProducts() {
  const history = useHistory();
  function createData(
    id,
    productname,
    ProductBrand,
    ProductCategory,
    Quantity,
    Sample,
    Warrantyperiod,
    productDescription,
    paymentDetail,
    deliveryCharges
  ) {
    return {
      id,
      productname,
      ProductBrand,
      ProductCategory,
      Quantity,
      Sample,
      Warrantyperiod,
      productDescription,
      paymentDetail,
      deliveryCharges,
    };
  }

  const rows = [
    createData(
      "1",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
    createData(
      "2",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
    createData(
      "3",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
    createData(
      "4",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
    createData(
      "5",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
    createData(
      "6",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
    createData(
      "7",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
    createData(
      "8",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
    createData(
      "9",
      "S21 Ultra",
      "Samsung",
      "Electronics",
      20,
      "Included",
      "12 Months",
      "Box Pack 6Gb 512Gb",
      "Cash on Delivery",
      "Rs 1000"
    ),
  ];

  return (
    <>
      <div>
        <button
          className="tableButton"
          onClick={() => {
            history.push("/addproduct");
          }}
        >
          Add
        </button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "black" }}>
                <TableCell
                  style={{ color: "white", font: "bold" }}
                  align="centre"
                >
                  ID
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Product Name
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Product Brand
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Product Category
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Quantity
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Sample
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Warranty Period
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Product Description
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Payment Detail
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Delivery Charges
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="centre">{row.productname}</TableCell>
                  <TableCell align="centre">{row.ProductBrand}</TableCell>
                  <TableCell align="centre">{row.ProductCategory}</TableCell>
                  <TableCell align="centre">{row.Quantity}</TableCell>
                  <TableCell align="centre">{row.Sample}</TableCell>
                  <TableCell align="centre">{row.Warrantyperiod}</TableCell>
                  <TableCell align="centre">{row.productDescription}</TableCell>
                  <TableCell align="centre">{row.paymentDetail}</TableCell>
                  <TableCell align="centre">{row.deliveryCharges}</TableCell>
                  <TableCell align="centre">
                    {row.Action}

                    <>
                      {/* <Link to={"/Buyer" + params}>
              <button className="sellerListApprove">Edit</button>
            </Link> */}
                      <button
                        className="sellerListApprove"
                        onClick={() => {
                          history.push("/productupdate");
                        }}
                        // onClick={() => handleDelete(params.row.id)}
                      >
                        Edit
                      </button>

                      <button
                        className="sellerListDecline"
                        // onClick={() => handleDelete(params.row.id)}
                      >
                        Delete
                      </button>
                    </>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
