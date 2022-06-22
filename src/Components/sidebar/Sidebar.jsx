/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import sellerService from "../../Services/SellerServices";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BuildIcon from "@mui/icons-material/Build";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { AccountBox, Home } from "@mui/icons-material";
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
import { VerifyContext } from "../../Contexts/Verification/Verify";

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
  const [isdisable, setisdisable] = React.useState(false);
  const Verification = React.useContext(VerifyContext);

  const Checker = () => {
    if (Verification) {
      if (
        Verification.blocked === false &&
        Verification.emailVerified === true &&
        !(Verification.status === "APPROVED")
      ) {
        setisdisable(false);
      } else {
        setisdisable(true);
      }
    }
  };
  React.useEffect(Checker, [Verification]);

  const direct = () => {
    window.location.href = "/login";
  };
  return (
    <Box>
      {sellerService.isLoggedIn() ? (
        <>
          <Box sx={{ width: "200px" }}>
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
                  <StyledListItemButton
                    component={Link}
                    to="/"
                    disabled={isdisable}
                  >
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                  </StyledListItemButton>
                </StyledListItem>
                {/* Second */}
                <StyledTypography>Menu</StyledTypography>

                <StyledListItem disablePadding>
                  <StyledListItemButton
                    component={Link}
                    to="/warranty/REQUESTED/"
                    disabled={isdisable}
                  >
                    <ListItemIcon>
                      <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Warranties" />
                  </StyledListItemButton>
                </StyledListItem>
                <StyledListItem disablePadding>
                  <StyledListItemButton
                    component={Link}
                    to="/products/"
                    disabled={isdisable}
                  >
                    <ListItemIcon>
                      <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                  </StyledListItemButton>
                </StyledListItem>
                <StyledListItem disablePadding>
                  <StyledListItemButton
                    component={Link}
                    to="/orders/PLACED"
                    disabled={isdisable}
                  >
                    <ListItemIcon>
                      <LocalShippingIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                  </StyledListItemButton>
                </StyledListItem>
                <StyledListItem disablePadding>
                  <StyledListItemButton
                    component={Link}
                    to="/transactions"
                    disabled={isdisable}
                  >
                    <ListItemIcon>
                      <ReceiptIcon />
                    </ListItemIcon>
                    <ListItemText primary="Transactions" />
                  </StyledListItemButton>
                </StyledListItem>

                <StyledTypography>About</StyledTypography>
                <StyledListItem disablePadding>
                  <StyledListItemButton
                    component={Link}
                    to="/sellerprofile"
                    disabled={isdisable}
                  >
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

                      setTimeout(direct, 1000);
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
    </Box>
  );
}
