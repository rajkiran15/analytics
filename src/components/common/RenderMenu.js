const RenderMenu = (anchorEl,menuId,handleMenuClose,isMenuOpen,css) => (
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
        style={{...css}}
    >
        <MenuItem>Edit Chart</MenuItem>
        <MenuItem>Transform</MenuItem>
    </Menu>
);
export default RenderMenu;