import React from "react";
import { CHARTS_TYPE,LEFT_DRAWER_TYPE } from "../../utils/constant";
import RenderCurrentChart from "./RenderCurrentChart";
import { Responsive, WidthProvider } from "react-grid-layout";
import Card from '@mui/material/Card';
import Navbar from "../common/Navbar";
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LeftDrawer from "./LeftDrawer";
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";
import "./dashboard.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const Dashboard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [toggleDrawer, setToggleDrawer] = React.useState(false);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'primary-search-account-menu';
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const charts = [
        CHARTS_TYPE.SIMPLE_LINE_CHART,
        CHARTS_TYPE.SIMPLE_AREA_CHART,
        CHARTS_TYPE.SIMPLE_BAR_CHART,
        CHARTS_TYPE.TABLE_CHART
    ];
    const [layout, setLayout] = React.useState([
        { i: charts[0], x: 0, y: 0, w: 2, h: 1 },
        { i: charts[1], x: 2, y: 0, w: 1, h: 1 },
        { i: charts[2], x: 3, y: 0, w: 1, h: 1 },
        { i: charts[3], x: 3, y: 0, w: 4, h: 1 }
    ]);
    const renderMenu = () => (
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
            style={{ position: "absolute", top: "35px" }}
        >
            <MenuItem onClick={() => handleLeftDrawer(LEFT_DRAWER_TYPE.TOGGLE_LEFT_DRAWER)}>Edit Chart</MenuItem>
            <MenuItem>Transform</MenuItem>
        </Menu>
    );
    const handleLeftDrawer = (type) => {
        switch (type) {
            case LEFT_DRAWER_TYPE.TOGGLE_LEFT_DRAWER:
                return setToggleDrawer(!toggleDrawer);
        }
    }
    return (
        <div style={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: "#FEF9F3", overflow: "hidden" }}>
            <Navbar />
            <ResponsiveReactGridLayout
                className="layout"
                layouts={{ lg: layout }}
                onLayoutChange={(e) => setLayout(e)}
                measureBeforeMount={false}
                cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                rowHeight={300}
                width={1000}
                isDraggable={true}
            >
                {charts.map((chart) => (
                    <Card key={chart} id="chartCard">
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                backgroundColor: "#2B1838",
                                alignItems: "center"
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <IconButton className="headerColor">
                                    <SignalCellularAltIcon />
                                </IconButton>
                                <div className="headerColor">
                                    Title
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <IconButton className="headerColor" onClick={(e) => handleProfileMenuOpen(e)}>
                                    <MoreHorizIcon />
                                </IconButton>
                                <IconButton className="headerColor">
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        </Box>
                        {RenderCurrentChart(chart)}
                        {renderMenu()}
                    </Card>
                ))}
            </ResponsiveReactGridLayout>
            <LeftDrawer
                handleLeftDrawer={handleLeftDrawer}
                toggleDrawer={toggleDrawer}
            />
        </div>
    );
};
export default Dashboard;
