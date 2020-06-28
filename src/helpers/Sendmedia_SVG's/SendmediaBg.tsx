import React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle, Rect } from "react-native-svg";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Constants";

interface SendmediaBgProps {}

export const SendmediaBg: React.FC<SendmediaBgProps> = ({}) => {
  return (
    <Svg
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      viewBox={`0 0 ${SCREEN_WIDTH} ${SCREEN_HEIGHT}`}
    >
      <Defs>
        <ClipPath id="prefix__b">
          <Path fill="none" d="M0 0h86v83H0z" />
        </ClipPath>
        <ClipPath id="prefix__a">
          <Path d="M0 0h375v812H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path fill="#d492df" d="M0 0h375v812H0z" />
        <Path
          fill="#e7c2ee"
          d="M-21.93 317.06c-6.056 15.392-53.932 42.667 10.679 44.475s37.323-23.24 38.097-38.229 44.03-48.246-1.765-54.11-40.957 32.477-47.01 47.864z"
          data-name="Path 479"
        />
        <Path
          fill="#e7c2ee"
          d="M-11.096 317.6c-7.093 18.421-61.687 51.66 11.378 52.79s42.59-28.263 43.7-46.124 50.569-58.147-1.141-64.405-46.844 39.318-53.937 57.74z"
          data-name="Path 482"
          opacity={0.55}
        />
        <Path
          fill="#e7c2ee"
          d="M151.93-9.32l335.51-66.432-170.738 366.149z"
          data-name="Polygon 7"
        />
        <Path
          fill="#e7c2ee"
          d="M73.03-16.347l323-112.48-118.12 386.348z"
          data-name="Polygon 8"
          opacity={0.55}
        />
        <G
          clipPath="url(#prefix__b)"
          data-name="Repeat Grid 1"
          transform="translate(277 331)"
        >
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(32)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(64)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(0 28)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(32 28)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(64 28)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(0 56)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(32 56)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(64 56)"
          />
        </G>
        <G
          clipPath="url(#prefix__b)"
          data-name="Repeat Grid 2"
          transform="translate(-31 -27)"
        >
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(32)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(64)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(0 28)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(32 28)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(64 28)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(0 56)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(32 56)"
          />
          <Circle
            cx={10}
            cy={10}
            r={10}
            fill="#e7c2ee"
            data-name="Ellipse 89"
            transform="translate(64 56)"
          />
        </G>
      </G>
    </Svg>
  );
};
