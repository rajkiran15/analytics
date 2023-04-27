import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'primary-search-account-menu';
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            style={{ position: "absolute", top: "58px" }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
        </Menu>
    );
    return (
        <Box>
            <AppBar position="static" style={{ backgroundColor: "#ffff", width: "100vw" }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "calc(100% - 50px)", alignItems: "center" }}>
                    <div>
                        <h2 style={{ color: "black" }}>Analytics</h2>
                    </div>
                    <div>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            style={{ backgroundColor: "black" }}
                            onClick={(e) => handleProfileMenuOpen(e)}
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </div>
            </AppBar>
            {renderMenu}
        </Box>
    );
}