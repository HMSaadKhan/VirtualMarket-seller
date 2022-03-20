import React from "react";
import "./OrderList.css";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function OrderList() {
  const [status, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const history = useHistory();
  function createData(
    id,
    buyername,
    productname,
    email,
    city,
    address,
    Phone,
    status
  ) {
    return {
      id,
      buyername,
      productname,
      email,
      city,
      address,
      Phone,
      status,
    };
  }

  const rows = [
    createData(
      "1",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "2",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "3",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "4",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "5",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "6",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "7",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "8",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "9",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
    createData(
      "10",
      "Saad Khan",
      "S21 Ultra",
      "saadkhan2311@gmail.com",
      "Lahore",
      "Shop.no.21, Shah Alam, Market",
      "03046546876"
    ),
  ];

  return (
    <>
      <div>
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
                  Buyer Name
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Product Name
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Email
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  City
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Address
                </TableCell>
                <TableCell style={{ color: "white" }} align="centre">
                  Phone
                </TableCell>

                <TableCell style={{ color: "white" }} align="centre">
                  Status
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
                  <TableCell align="centre">{row.buyername}</TableCell>
                  <TableCell align="centre">{row.productname}</TableCell>
                  <TableCell align="centre">{row.email}</TableCell>
                  <TableCell align="centre">{row.city}</TableCell>
                  <TableCell align="centre">{row.address}</TableCell>
                  <TableCell align="centre">{row.Phone}</TableCell>
                  <TableCell align="centre">
                    {row.status}
                    <>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"></InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Prepairing</MenuItem>
                            <MenuItem value={20}>Shipped</MenuItem>
                            <MenuItem value={30}>Delivered</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
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
