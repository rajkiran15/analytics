import React from "react";
import { CHARTS_TYPE } from "../../utils/constant";

const RenderCurrentChart = (type) => {
    const chart=require(`../charts/${type}.js`).default;
    switch (type) {
        case CHARTS_TYPE.SIMPLE_LINE_CHART:
            return chart(type);
        case CHARTS_TYPE.SIMPLE_AREA_CHART:
            return chart(type);
        case CHARTS_TYPE.SIMPLE_BAR_CHART:
            return chart(type);
        case CHARTS_TYPE.TABLE_CHART:
            return chart(type);
        default:
            <h2>coming soon...</h2>
    }
}

export default RenderCurrentChart;