import React from "react";
import Svg, { Defs, ClipPath, Path, Ellipse, G } from "react-native-svg";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Constants";

interface ScheduleBgProps {}

export const ScheduleBg: React.FC<ScheduleBgProps> = ({}) => {
  return (
    <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} viewBox={`0 0 ${SCREEN_WIDTH} ${SCREEN_HEIGHT}`}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M0 0h375v812H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path fill="#e58571" d="M0 0h375v812H0z" />
        <Ellipse
          cx={51}
          cy={77}
          fill="#f8b1a2"
          data-name="Ellipse 85"
          opacity={0.58}
          rx={51}
          ry={77}
          transform="translate(312 -119)"
        />
        <Path
          fill="#fbb6a8"
          d="M679.482 14.635L536.512 565.4l-366.036-296.41z"
          data-name="Polygon 3"
          opacity={0.67}
        />
        <Path
          fill="#fbb6a8"
          d="M656.47 14.633L513.5 565.4 147.462 268.99z"
          data-name="Polygon 4"
          opacity={0.4}
        />
        <Ellipse
          cx={120.5}
          cy={122}
          fill="#fbb6a8"
          data-name="Ellipse 86"
          opacity={0.77}
          rx={120.5}
          ry={122}
          transform="rotate(93 76.753 -1.848)"
        />
      </G>
    </Svg>
  );
};
