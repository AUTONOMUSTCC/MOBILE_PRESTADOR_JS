import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

export function SalvoIcon({
  inactiveColor = "#dadada",
  activeColor = "#FFC100",
  size = 27,
  value,          // estado controlado (true/false)
  onChange,       // callback quando mudar
}) {
  const [internalValue, setInternalValue] = useState(false);

  // Decide se usa estado externo ou interno
  const isControlled = value !== undefined && onChange !== undefined;
  const active = isControlled ? value : internalValue;

  const color = active ? activeColor : inactiveColor;

  const toggle = () => {
    if (isControlled) {
      onChange(!value);
    } else {
      setInternalValue(!internalValue);
    }
  };

  return (
    <TouchableOpacity onPress={toggle} activeOpacity={0.7}>
      <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
        <Circle cx="13.5" cy="13.5" r="13" fill="white" stroke={color} />
        <Path
          d="M9 19.25V9.25C9 8.90625 9.1224 8.61198 9.36719 8.36719C9.61198 8.1224 9.90625 8 10.25 8H16.5C16.8437 8 17.138 8.1224 17.3828 8.36719C17.6276 8.61198 17.75 8.90625 17.75 9.25V19.25L13.375 17.375L9 19.25Z"
          fill={color}
        />
      </Svg>
    </TouchableOpacity>
  );
}
