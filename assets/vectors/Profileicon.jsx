import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Profileicon = ({ color = "#818898", ...props }) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.3438 14H10.3438C7.58233 14 5.34375 16.2386 5.34375 19V20C5.34375 20.5523 5.79147 21 6.34375 21H18.3438C18.896 21 19.3438 20.5523 19.3438 20V19C19.3438 16.2386 17.1052 14 14.3438 14Z"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M12.3438 11C14.5529 11 16.3438 9.20914 16.3438 7C16.3438 4.79086 14.5529 3 12.3438 3C10.1346 3 8.34375 4.79086 8.34375 7C8.34375 9.20914 10.1346 11 12.3438 11Z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);
export default Profileicon;
