//src

interface toolTipType {
  datum?: any;
  x?: any;
  y?: any;
  type: "year" | "month";
}

const BarChartToolTip = (props: any) => {
  const { datum, x, y } = props;

  return (
    <g style={{ pointerEvents: "none" }}>
      <foreignObject x={x - 60} y={y - 90} width={130} height={100}>
        <div
          style={{
            background: "black",
            color: "white",
            padding: "8px",
            fontSize: "10px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              rowGap: "5px",
              columnGap: "20px",
            }}
          >
            <p> Sales of Month</p>

            <p>{datum.y}</p>

            <p>No of Months</p>
            <p>{datum.x}</p>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

export default BarChartToolTip;
