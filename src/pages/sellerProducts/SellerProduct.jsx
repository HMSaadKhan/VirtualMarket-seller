import React, { useState, useEffect, useRef } from "react";
import "./sellerProduct.css";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "../../Services/ProductServices";

const SellerProducts = () => {
  const history = useHistory();

  const [sellerProducts, setSellerProducts] = useState([]);
  const tempfunction = useRef();
  const getSellerProducts = () => {
    productService
      .GetAllBySeller()
      .then((data) => {
        console.log(data);
        setSellerProducts(data);
        console.log(sellerProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  tempfunction.current = getSellerProducts;
  useEffect(() => {
    tempfunction.current();
  }, []);
  const handleDelete = async (_id) => {
    await productService.deleteProduct(_id);
    getSellerProducts();
  };
  return (
    <>
      <div>
        <Fab
          className="tableButton"
          color="primary"
          aria-label="add"
          onClick={() => {
            history.push("/addproduct");
          }}
        >
          <AddIcon />
        </Fab>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "black" }}>
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
                  Status
                </TableCell>

                <TableCell style={{ color: "white" }} align="centre">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sellerProducts.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="centre">{row.name}</TableCell>
                  <TableCell align="centre">{row.brand}</TableCell>
                  <TableCell align="centre">{row.category.name}</TableCell>
                  <TableCell align="centre">{row.stock}</TableCell>
                  <TableCell align="centre">
                    {row.approved ? (
                      <span className="approved">Approved</span>
                    ) : (
                      <span className="notApproved">Not Approved</span>
                    )}
                  </TableCell>
                  <TableCell align="centre">
                    {row.Action}

                    <>
                      {/* <Link to={"/Buyer" + params}>
              <button className="sellerListApprove">Edit</button>
            </Link> */}
                      <IconButton
                        onClick={() => {
                          history.push("/editDetails/" + row._id);
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton>
                        <DeleteIcon
                          onClick={(e) => {
                            handleDelete(row._id);
                          }}
                        />
                      </IconButton>
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
};
export default SellerProducts;
