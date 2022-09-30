import { useState } from "react";
import {
  VictoryBar, //bar graph
  VictoryLine, // line graph
  VictoryChart, // chart wrapper
  VictoryTheme, //theme of victory
  VictoryAxis, //axis styles
  VictoryScatter, // used for SCATTER
  Bar, // custom background bar
  VictoryStack,
} from "victory";

const barData = [
  {
    x: 1,
    y: 10000,
  },
  { x: 2, y: 11000 },
  { x: 3, y: -10000 },
  { x: 4, y: 13000 },
  { x: 5, y: -8000 },
  { x: 6, y: -1000 },
  { x: 7, y: -8000 },
  { x: 8, y: 2000 },
  { x: 9, y: 1000 },
  { x: 10, y: -6000 },
  { x: 11, y: -10000 },
  { x: 12, y: 9000 },
];

const lineData = [
  { x: 1, y: 10000, barData: barData[0] },
  { x: 2, y: 21000, barData: barData[1] },
  { x: 3, y: 11000, barData: barData[2] },
  { x: 4, y: 24000, barData: barData[3] },
  { x: 5, y: 16000, barData: barData[4] },
  { x: 6, y: 16000, barData: barData[5] },
  { x: 7, y: 8000, barData: barData[6] },
  { x: 8, y: 10000, barData: barData[7] },
  { x: 9, y: 11000, barData: barData[8] },
  { x: 10, y: 5000, barData: barData[9] },
  { x: 11, y: 1000, barData: barData[10] },
  { x: 12, y: 9000, barData: barData[11] },
];
interface profitLossAnalysisChart {
  setDataForPortfolioDetails?: any;
  type?: "month" | "year";
  profitLossData?: any;
}
const ProfitLossAnalysisChart = (props: profitLossAnalysisChart) => {
  const { setDataForPortfolioDetails, type = "year", profitLossData } = props;

  const [selected, setSelected] = useState<any>(null);
  const animateObject = {
    onLoad: { duration: 300 },
  };

  const CustomBar = (props: any) => {
    const yRange = props.scale.y.range();
    const y0 = yRange[0]; //customization to take graphs height
    const y = yRange[1];
    return <Bar {...props} y={y} y0={y0} />;
  };

  const handleMouseEnter = (props: any) => {
    setSelected(props.index);
  };

  const handleMouseLeave = (props: any) => {
    setSelected(null);
  };

  const handleClickOnTheBar = (props: any) => {
    setDataForPortfolioDetails && setDataForPortfolioDetails(props.index);
  };

  const xLabelsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={15}
        width={800}
        padding={{ top: 20, bottom: 20, left: 80, right: 20 }}
        height={440}
      >
        <VictoryAxis
          crossAxis={false}
          dependentAxis //for y-axis
          label={`Profit/Loss chart`}
          offsetX={72}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            grid: { stroke: "#e5e6ea" },
            axisLabel: {
              padding: 50,
              fontSize: "12px",
            },
            tickLabels: { fontSize: "8px" },
          }}
          // tickFormat={(y) => `$ ${y}`}
        />
        <VictoryAxis
          offsetY={50}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            grid: { stroke: "transparent" },
            tickLabels: {
              fontSize: "8px",
              padding: 30,
            },
          }}
        />

        <VictoryBar
          data={lineData}
          barWidth={35}
          dataComponent={<CustomBar />}
          style={{
            data: {
              fill: (d) => {
                return d?.index === selected
                  ? d.datum.barData.y < 0
                    ? "#f8efef"
                    : "#d2eee1"
                  : "transparent";
              },
              opacity: 0.7,
              strokeWidth: 1,
            },
          }}
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseEnter: () => {
                  return [
                    {
                      target: "data",
                      mutation: handleMouseEnter,
                    },
                  ];
                },
                onMouseLeave: () => {
                  return [
                    {
                      target: "data",
                      mutation: handleMouseLeave,
                    },
                  ];
                },
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: handleClickOnTheBar,
                    },
                  ];
                },
              },
            },
          ]}
        />

        <VictoryBar
          animate={animateObject}
          cornerRadius={{ top: 5 }}
          style={{
            data: {
              fill: ({ datum }) => (datum.y < 0 ? "#e54f45" : "#1da868"),
              pointerEvents: "none",
              width: 20,
            },
          }}
          data={barData}
          categories={{
            x: xLabelsArray,
          }}
        />

        <VictoryLine
          data={lineData}
          style={{
            data: {
              stroke: "#2988df",
              pointerEvents: "none",
              strokeWidth: 2,
            },
          }}
        />

        <VictoryScatter
          style={{
            data: {
              fill: "#2988df",
              stroke: "#fff",
              strokeWidth: 1,
              pointerEvents: "none",
            },
          }}
          size={5}
          data={Number.isInteger(selected) ? [lineData[selected]] : []}
        />
      </VictoryChart>
    </div>
  );
};

export default ProfitLossAnalysisChart;
