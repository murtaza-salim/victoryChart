import { useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryPortal,
  VictoryTooltip,
} from "victory";
import BarChartToolTip from "./components/bar-chart-tooltip";

const sampleData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

//OBJECTIVES

// Intro to bar chart
//style properties
//labels

//victory tooltip
//custom tooltip

// events

const BarChart = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const handleMouseEnter = (props: any) => {
    console.log("selectiorn ,", props.index);
    setSelected(props.index);
  };

  return (
    <div>
      <VictoryChart domainPadding={30}>
        <VictoryBar
          style={{
            data: {
              stroke: "red",
              strokeWidth: 4,
              // fill: "blue",
              fill: (d: any) => {
                return d?.index === selected ? "yellow" : "blue";
              },
            },
          }}
          data={sampleData}
          labelComponent={
            <VictoryTooltip flyoutComponent={<BarChartToolTip />} />
          }
          labels={({ datum }) => {
            return "";
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
              },
            },
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
