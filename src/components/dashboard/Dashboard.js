import React from "react";
import { CHARTS_TYPE } from "../../utils/constant";
import RenderCurrentChart from "./RenderCurrentChart";
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import Card from '@mui/material/Card';
import "../../index.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const Dashboard = () => {
  const charts = [
    CHARTS_TYPE.SIMPLE_LINE_CHART,
    CHARTS_TYPE.SIMPLE_AREA_CHART,
    CHARTS_TYPE.SIMPLE_BAR_CHART,
    CHARTS_TYPE.TABLE_CHART
  ];
  const [layout,setLayout] = React.useState([
    { i: charts[0], x: 0, y: 0, w: 2, h: 1 },
    { i: charts[1], x: 2, y: 0, w: 1, h: 1 },
    { i: charts[2], x: 3, y: 0, w: 1, h: 1 },
    { i: charts[3], x: 3, y: 0, w: 4, h: 1 }
  ]);
  return (
        <div style={{minWidth:"100vw",minHeight:"100vh",backgroundColor:"#FEF9F3",overflow:"hidden"}}>
            <ResponsiveReactGridLayout
                className="layout"
                layouts={{ lg: layout }}
                onLayoutChange={(e)=> setLayout(e)}
                measureBeforeMount={false}
                cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                rowHeight={300}
                width={1000}
                isDraggable={true}
            >
                {charts.map((chart) => (
                    <Card key={chart}>
                        {RenderCurrentChart(chart)}
                    </Card>
                ))}
            </ResponsiveReactGridLayout>
        </div>
    );
};
export default Dashboard;
