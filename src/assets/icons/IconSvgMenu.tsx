import * as React from "react";
import Svg, { Path } from "react-native-svg"
import {StyleSheet} from "react-native";

const IconSvgMenu = () => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={2}
            d="M1 2h16M1 8h16M1 14h16"
        />
    </Svg>
)
export default IconSvgMenu
