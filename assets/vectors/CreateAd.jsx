import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CreateAd = ({ color = "#818898", ...props }) => (
  <Svg
  width={25}
  height={24}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 6V3.75M6 6V8.25M6 6H8.25M6 6H3.75M9 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V9C1.5 9.82843 2.17157 10.5 3 10.5H9C9.82843 10.5 10.5 9.82843 10.5 9V3C10.5 2.17157 9.82843 1.5 9 1.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CreateAd;
