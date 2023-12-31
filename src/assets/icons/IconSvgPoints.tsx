import * as React from "react";
import Svg, { Circle } from "react-native-svg"

const IconSvgPoints = () => (
    <Svg
        width={30}
        height={3}
        fill="none"
    >
        <Circle cx={2.3} cy={1.5} r={1.5} fill="#262626" />
        <Circle cx={7.8} cy={1.5} r={1.5} fill="#262626" />
        <Circle cx={13.3} cy={1.5} r={1.5} fill="#262626" />
    </Svg>
)
export default IconSvgPoints

