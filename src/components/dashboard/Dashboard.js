import React from "react";
import { CHARTS_TYPE, LEFT_DRAWER_TYPE } from "../../utils/constant";
import RenderCurrentChart from "./RenderCurrentChart";
import { Responsive, WidthProvider } from "react-grid-layout";
import Card from "@mui/material/Card";
import Navbar from "../common/Navbar";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LeftDrawer from "./LeftDrawer";
import AddIcon from "@mui/icons-material/Add";
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";
import "./dashboard.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toggleDrawer, setToggleDrawer] = React.useState(false);
  const [generateEmptyBox, setGenerateEmptyBox] = React.useState([]);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";
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
    CHARTS_TYPE.TABLE_CHART,
  ];
  const [layout, setLayout] = React.useState([
    { i: charts[0], x: 0, y: 0, w: 2, h: 1 },
    { i: charts[1], x: 2, y: 0, w: 1, h: 1 },
    { i: charts[2], x: 3, y: 0, w: 1, h: 1 },
    { i: charts[3], x: 3, y: 0, w: 4, h: 1 },
  ]);
  const renderMenu = () => (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ position: "fixed", top: "35px", zIndex: 99999999 }}
    >
      <MenuItem
        onClick={() => handleLeftDrawer(LEFT_DRAWER_TYPE.TOGGLE_LEFT_DRAWER)}
      >
        Edit Chart
      </MenuItem>
      <MenuItem>Exports</MenuItem>
    </Menu>
  );
  const handleLeftDrawer = (type) => {
    switch (type) {
      case LEFT_DRAWER_TYPE.TOGGLE_LEFT_DRAWER:
        return setToggleDrawer(!toggleDrawer);
    }
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90vw",
          minHeight: "100vh",
          overflow: "hidden",
          margin: "0 auto",
          padding: "5px",
        }}
        onClick={() => {
          console.log("dfoj");
        }}
      >
        <ResponsiveReactGridLayout
          className="layout"
          layouts={{ lg: layout }}
          onLayoutChange={(e) => setLayout(e)}
          measureBeforeMount={false}
          cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          compactType={null}
          isDraggable={true}
          isBounded={true}
          margin={[5, 5]}
          resizeHandles={["ne", "e", "n", "s", "w", "sw", "nw", "se"]}
        >
          {charts.map((chart) => (
            <Card key={chart} id="chartCard">
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#2B1838",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton className="headerColor">
                    <SignalCellularAltIcon />
                  </IconButton>
                  <div className="headerColor">Title</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    className="headerColor"
                    onClick={(e) => handleProfileMenuOpen(e)}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                  <IconButton
                    className="headerColor"
                    onClick={() => {
                      console.log("close");
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </Box>
              {RenderCurrentChart(chart)}
            </Card>
          ))}
        </ResponsiveReactGridLayout>
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0px",
            borderRadius: "20px",
            backgroundColor: "#ffff",
            margin: "10px",
          }}
        >
          {generateEmptyBox.map((box, index) => (
            <Card
              key={index}
              style={{
                width: "200px",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
              }}
            >
              <AddIcon
                style={{
                  color: "red",
                  border: "2px solid pink",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "50px",
                }}
                onClick={() => handleLeftDrawer(LEFT_DRAWER_TYPE.TOGGLE_LEFT_DRAWER)}
              />
            </Card>
          ))}
        </Box>
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0px",
            borderRadius: "20px",
            backgroundColor: "#ffff",
            margin: "10px",
          }}
        >
          <Card style={{ borderRadius: "50%" }}>
            <IconButton
              style={{
                background: "#2B1838",
                color: "#ffff",
                fontSize: "14px",
              }}
              onClick={() => setGenerateEmptyBox([1, 2, 3, 4])}
            >
              <AddIcon />
            </IconButton>
          </Card>
        </Box>
        {renderMenu()}
        <LeftDrawer
          handleLeftDrawer={handleLeftDrawer}
          toggleDrawer={toggleDrawer}
        />
      </div>
    </>
  );
};
export default Dashboard;
