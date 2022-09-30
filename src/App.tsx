import React, { useState } from "react";
import Header from "./components/header/header";
import LineChart from "./components/line-chart/line-chart";
import "./App.css";
import BarChart from "./components/bar-chart/bar-chart";
import ProfitLossAnalysisChart from "./components/combined-chart/combined-chart";
import StackedBubbleChart from "./components/stacked-bubble-chart/stacked-bubble-chart";

function App() {
  const [showChart, setShowChart] = useState<string>("lineChart");
  return (
    <div>
      <Header setShowChart={setShowChart} showChart={showChart} />

      {showChart === "lineChart" && (
        <div className="chartContainer">
          <LineChart />
        </div>
      )}

      {showChart === "barChart" && (
        <div className="chartContainer">
          <BarChart />
        </div>
      )}

      {showChart === "combinedChart" && (
        <div className="chartContainer">
          <ProfitLossAnalysisChart />
        </div>
      )}

      {showChart === "StackedBubble" && (
        <div className="chartContainer">
          <StackedBubbleChart />
        </div>
      )}
    </div>
  );
}

export default App;
