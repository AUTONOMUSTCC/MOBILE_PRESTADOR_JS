import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Adsicon = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.76025 21V5C5.76025 4.45 5.95609 3.97917 6.34775 3.5875C6.73942 3.19583 7.21025 3 7.76025 3H17.7603C18.3103 3 18.7811 3.19583 19.1728 3.5875C19.5644 3.97917 19.7603 4.45 19.7603 5V21L12.7603 18L5.76025 21ZM7.76025 17.95L12.7603 15.8L17.7603 17.95V5H7.76025V17.95Z"
      fill="#999999"
    />
  </Svg>
);
export default Adsicon;
