import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Homeicon =  ({ color = "#818898", ...props }) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.875 21H7.875C6.21815 21 4.875 19.7389 4.875 18.1833V10.9C4.875 10.153 5.19107 9.43656 5.75368 8.90834L11.4608 3.54999C12.2418 2.81667 13.5082 2.81667 14.2892 3.54999L19.9963 8.90834C20.5589 9.43656 20.875 10.153 20.875 10.9V18.1833C20.875 19.7389 19.5319 21 17.875 21H15.875M9.875 21V16C9.875 14.8954 10.7704 14 11.875 14H13.875C14.9796 14 15.875 14.8954 15.875 16V21M9.875 21H15.875"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);
export default Homeicon;
