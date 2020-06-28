import React from "react";
import Svg, { Defs, ClipPath, Path, Ellipse, G } from "react-native-svg";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Constants";

interface VideocallBgProps {}

export const VideocallBg: React.FC<VideocallBgProps> = ({}) => {
  return (
    <Svg
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      viewBox={`0 0 ${SCREEN_WIDTH} ${SCREEN_HEIGHT}`}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M0 0h375v812H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path fill="#02d2b1" d="M0 0h375v812H0z" />
        <Ellipse
          cx={101}
          cy={109.5}
          fill="#55efd6"
          data-name="Ellipse 87"
          opacity={0.68}
          rx={101}
          ry={109.5}
          transform="translate(293 277)"
        />
        <Ellipse
          cx={101}
          cy={109.5}
          fill="#55efd6"
          data-name="Ellipse 88"
          opacity={0.47}
          rx={101}
          ry={109.5}
          transform="translate(318 191)"
        />
        <Path
          fill="#5ef2da"
          d="M336.228-53.04L-35.285 338.075l-166.282-433.18z"
          data-name="Polygon 5"
          opacity={0.91}
        />
        <Path
          fill="#5ef2da"
          d="M388.545-17.451L-57.8 352.779l-125.35-467.487z"
          data-name="Polygon 6"
          opacity={0.42}
        />
      </G>
    </Svg>
  );
};
