import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function IconCheckbox({
  label,
  value,
  defaultValue = false,
  onValueChange,
  size = 22,
  color = '#E66F51',
  uncheckedColor = '#666',
}) {
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = typeof value === 'boolean';
  const checked = isControlled ? value : internal;

  const toggle = () => {
    const next = !checked;
    if (!isControlled) setInternal(next);
    onValueChange && onValueChange(next);
  };

  return (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.7}
      onPress={toggle}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      <View style={styles.iconBox}>
        <MaterialIcons
          name={checked ? 'check-box' : 'check-box-outline-blank'}
          size={size}
          color={checked ? color : uncheckedColor}
        />
      </View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    marginTop: 10,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});
