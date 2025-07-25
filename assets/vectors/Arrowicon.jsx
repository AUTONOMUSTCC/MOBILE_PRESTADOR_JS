import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Arrowicon = (props) => (
  <Svg
    width={50}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.3335 9L16.6668 9M3.3335 9L8.3335 14M3.3335 9L8.3335 4"
      stroke="#1A1B25"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Arrowicon;
