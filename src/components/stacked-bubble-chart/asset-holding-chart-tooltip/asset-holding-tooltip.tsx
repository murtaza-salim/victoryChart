//lib
import * as R from "ramda";
import { Box } from "@mui/material";

//src

import { useAssetHoldingChartTooltipStyles } from "./asset-holding-tooltip.style";

const AssetHoldingTooltip = (props: any) => {
  const { datum, x, y, index } = props;
  const classes: any = useAssetHoldingChartTooltipStyles();

  const currencyCode = "usd";
  const currencySymbol = "$";

  const amount = R.pathOr("", ["amount"], datum);
  const radius = R.pathOr(0, ["radius"], datum);

  const assetSymbol = R.pathOr("", ["asset_symbol"], datum);
  const fiatValue = R.pathOr("", ["asset_value", currencyCode], datum);

  const lastColXLoc = 1050;
  const isLastColHovered = x > lastColXLoc;
  const yTransalation = 55;
  const xTranslation = isLastColHovered ? x - radius - 117 : x + radius;
  return (
    <g style={{ pointerEvents: "none" }}>
      <foreignObject
        x={xTranslation}
        y={y - yTransalation}
        width="200"
        height="200"
      >
        <Box className={classes.tootTipWrapper}>
          {!isLastColHovered && (
            <Box className={classes.tipWrapper}>
              <Box className={classes.tip}></Box>
            </Box>
          )}
          <Box className={classes.upperContainerWrapper}>
            <Box>
              <Box>
                <p
                  className={classes.brightText}
                  style={{ marginBottom: "8px", fontWeight: "bold" }}
                >
                  {assetSymbol}
                </p>
                <p className={classes.lightText}>Amount held</p>

                <p className={classes.brightText}>
                  {Number(amount).toFixed(4)}
                </p>
              </Box>

              <Box style={{ marginTop: "7px" }}>
                <p className={classes.lightText}>{"Fiat value"}</p>

                <p className={classes.brightText}>{`${currencySymbol} ${Number(
                  fiatValue
                ).toFixed(4)}`}</p>
              </Box>
            </Box>
          </Box>
          {isLastColHovered && (
            <Box className={classes.rightTipWrapper}>
              <Box className={classes.rightTip}></Box>
            </Box>
          )}
        </Box>
      </foreignObject>
    </g>
  );
};

export default AssetHoldingTooltip;
