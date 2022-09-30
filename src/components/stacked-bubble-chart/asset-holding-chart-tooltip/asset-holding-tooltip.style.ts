import { makeStyles } from "@mui/styles";

export const useAssetHoldingChartTooltipStyles: any = makeStyles(
  (theme: any) => ({
    tootTipWrapper: {
      display: "flex",
      alignItems: "center",
    },
    upperContainerWrapper: {
      backgroundColor: "#1b2126",
      padding: "10px 25px 10px 15px",
      display: "flex",
    },

    lightText: {
      fontSize: "11px",
      color: "rgba(255,255,255, 0.7)",
      padding: "0px",
      margin: "0px",
      width: "auto",
    },

    brightText: {
      fontSize: "12px",
      color: "white",
      padding: "0px",
      margin: "0px",
      width: "auto",
    },

    tipWrapper: {
      marginTop: "-9px",
    },
    rightTipWrapper: {
      marginTop: "-9px",
    },
    tip: {
      marginRight: "-5px",
      width: 0,
      height: 0,
      borderTop: "16px solid transparent",
      borderBottom: "16px solid transparent",
      borderRight: "16px solid #1b2126",
    },
    rightTip: {
      marginLeft: "-5px",
      width: 0,
      height: 0,
      borderTop: "16px solid transparent",
      borderBottom: "16px solid transparent",
      borderLeft: "16px solid #1b2126",
    },
  })
);
