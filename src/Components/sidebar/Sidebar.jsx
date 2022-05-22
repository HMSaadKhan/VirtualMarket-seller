import React from "react";
import "./sidebar.css";
import { useHistory, Link } from "react-router-dom";
import sellerService from "../../Services/SellerServices";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BuildIcon from "@mui/icons-material/Build";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { AccountBox, Home, Settings } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledListItem = styled(ListItem)({ height: "35px" });
const StyledListItemButton = styled(ListItemButton)({
  height: "35px",
  paddingLeft: "10px",
});
const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  marginLeft: "10px",
});

export default function Sidebar(props) {
  const history = useHistory();
  const [Ordersopen, setOrderOpen] = React.useState(false);
  const [Warrantyopen, setWarrantyOpen] = React.useState(false);
  console.log(history);
  const handleClick = () => {
    setOrderOpen(!Ordersopen);
  };
  const WarrantyClick = () => {
    setWarrantyOpen(!Warrantyopen);
  };
  return (
    <>
      {sellerService.isLoggedIn() ? (
        <>
          <Box sx={{ width: "400px" }}>
            <Box
              position="fixed"
              sx={{
                width: "200px",
                height: "100%",
                backgroundColor: "#fafafa",
                zIndex: 1,
                paddingTop: "70px",
              }}
            >
              <List disablePadding>
                {/* First */}
                <StyledTypography>Dashboard</StyledTypography>

                <StyledListItem disablePadding>
                  <StyledListItemButton component={Link} to="/">
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                  </StyledListItemButton>
                </StyledListItem>
                {/* Second */}
                <StyledTypography>Menu</StyledTypography>

                <StyledListItem disablePadding>
                  <StyledListItemButton component={Link} to="/warranty">
                    <ListItemIcon>
                      <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Warranties" />
                  </StyledListItemButton>
                </StyledListItem>
                <StyledListItem disablePadding>
                  <StyledListItemButton component={Link} to="/products">
                    <ListItemIcon>
                      <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                  </StyledListItemButton>
                </StyledListItem>
                <StyledListItem disablePadding>
                  <StyledListItemButton component={Link} to="/orders/PLACED">
                    <ListItemIcon>
                      <LocalShippingIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                  </StyledListItemButton>
                </StyledListItem>
                <StyledListItem disablePadding>
                  <StyledListItemButton component={Link} to="/transactions">
                    <ListItemIcon>
                      <ReceiptIcon />
                    </ListItemIcon>
                    <ListItemText primary="Transactions" />
                  </StyledListItemButton>
                </StyledListItem>

                <StyledTypography>Notifications</StyledTypography>

                <StyledListItem disablePadding>
                  <StyledListItemButton component={Link} to="#simple-list">
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                  </StyledListItemButton>
                </StyledListItem>

                <StyledTypography>About</StyledTypography>
                <StyledListItem disablePadding>
                  <StyledListItemButton component={Link} to="/sellerprofile">
                    <ListItemIcon>
                      <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </StyledListItemButton>
                </StyledListItem>
                <StyledListItem disablePadding>
                  <StyledListItemButton
                    onClick={() => {
                      sellerService.logout();
                      history.push("/Login");
                      window.location.reload();
                    }}
                  >
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </StyledListItemButton>
                </StyledListItem>
              </List>
            </Box>
          </Box>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
