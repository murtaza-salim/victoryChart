// lib
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import * as R from "ramda";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

import AssetHoldingTooltip from "./asset-holding-chart-tooltip/asset-holding-tooltip";
import { AssetHoldingBackgroundSvg } from "./assets/background-svg";
import { customData, customData1 } from "./data";
import "./stack-chart.css";

const StyledPoint = styled.circle`
  fill: ${(props) => props.color};
  stroke: ${(props) => props.stroke};
  stroke-width: 2;
`;

const ScatterPoint = ({ x, y, datum }: any) => {
  const COMPARISON_X_AXIS_COLOR_RANGE = 12;

  const COLOR_SCHEMA_COMPARISON_LIST = {
    taxApplicable: {
      fill: "rgba(245, 126, 66, 0.75)",
      stroke: "#f57e42",
    },
    taxFree: { fill: "rgba(29, 168, 104, 0.75)", stroke: "#1da868" },
  };

  const fillColorForComparison =
    datum.x >= COMPARISON_X_AXIS_COLOR_RANGE
      ? COLOR_SCHEMA_COMPARISON_LIST.taxFree.fill
      : COLOR_SCHEMA_COMPARISON_LIST.taxApplicable.fill;

  const strokeColorForComparison =
    datum.x >= COMPARISON_X_AXIS_COLOR_RANGE
      ? COLOR_SCHEMA_COMPARISON_LIST.taxFree.stroke
      : COLOR_SCHEMA_COMPARISON_LIST.taxApplicable.stroke;

  return (
    <StyledPoint
      color={fillColorForComparison}
      stroke={strokeColorForComparison}
      cx={x}
      cy={y}
      r={datum.radius}
    />
  );
};

const BackgroundSvg = (props: any) => {
  return (
    <g style={{ pointerEvents: "none" }}>
      <foreignObject width="400" height="600" x={890} y={20}>
        <Box>
          <AssetHoldingBackgroundSvg />
        </Box>
      </foreignObject>
    </g>
  );
};

const stackedBubbleChart = () => {
  const MAX_Y_AXIS_NUMBER = 150;
  const MIN_RADIUS_FOR_LABELS_DISPLAY = 13;
  const BUBBLE_CHART_HEIGHT = MAX_Y_AXIS_NUMBER * 2.8;

  // customData

  const formattedData = customData1;

  const getLabel = (datum: any) => {
    return datum.radius > MIN_RADIUS_FOR_LABELS_DISPLAY
      ? datum.asset_symbol
      : "";
  };

  const getFontSize = (d: any) => {
    if (d.datum.radius < 15) return 8;
    if (d.datum.radius < 20) return 9;
    if (d.datum.radius < 25) return 10;
    if (d.datum.radius < 30) return 11;
    if (d.datum.radius < 40) return 12;
    return 13;
  };
  return (
    <Box>
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer className={"chartContainer"} />
        }
        domainPadding={{ x: 50, y: 15 }}
        width={1200}
        domain={{ y: [0, MAX_Y_AXIS_NUMBER] }}
        height={BUBBLE_CHART_HEIGHT}
        style={{
          background: { fill: "#D5FFEC" },
        }}
        backgroundComponent={<BackgroundSvg />}
      >
        <VictoryAxis
          label={"Number of months the asset was held"}
          tickValues={R.range(0, 16)}
          tickFormat={(t) => (R.equals(t, 15) ? `<${t}` : t)}
          crossAxis
          style={{
            tickLabels: {
              stroke: "transparent",
              fill: "#6E7982",
              fontSize: "14px",
            },
            axis: { stroke: "#e5e6ea" },
            axisLabel: { fontSize: "14px", fill: "#6E7982", padding: 38 },
          }}
        />

        <VictoryScatter
          data={formattedData}
          dataComponent={<ScatterPoint />}
          style={{
            labels: {
              fill: "black",
              fontSize: (d) => {
                return getFontSize(d);
              },
              fontWeight: "bold",
            },
          }}
          labelComponent={<VictoryLabel dy={5} />}
          labels={({ datum }) => getLabel(datum)}
        />

        <VictoryScatter
          data={formattedData}
          size={({ datum }: any) => datum.radius}
          style={{
            data: {
              fill: "transparent",
              stroke: "transparent",
              strokeWidth: 2,
            },
          }}
          labelComponent={
            <VictoryTooltip flyoutComponent={<AssetHoldingTooltip />} />
          }
          labels={({ datum }) => ""}
        />
      </VictoryChart>
    </Box>
  );
};

export default stackedBubbleChart;
