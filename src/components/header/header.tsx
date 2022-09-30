import "./header.css";

interface HeaderType {
  setShowChart: React.Dispatch<React.SetStateAction<string>>;
  showChart: string;
}

const Header = (props: HeaderType) => {
  const { setShowChart, showChart } = props;

  const HeaderLinks = [
    { name: "Line Chart", value: "lineChart" },
    { name: "Bar Chart", value: "barChart" },
    { name: "Combined Chart", value: "combinedChart" },
    { name: "Stacked Bubble Chart", value: "StackedBubble" },
    // { name: "Scatter Chart", value: "scatterChart" },
  ];
  return (
    <div className="container">
      {HeaderLinks.map((link) => {
        const isLinkActive = link.value === showChart;

        return (
          <div
            className={isLinkActive ? "active" : "" + "link"}
            onClick={() => setShowChart(link.value)}
          >
            {link.name}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
