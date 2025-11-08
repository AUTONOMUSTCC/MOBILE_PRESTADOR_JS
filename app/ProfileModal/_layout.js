import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="About" options={{ headerShown: false }} />
      <Stack.Screen name="EditablePassword" options={{ headerShown: false }} />
      <Stack.Screen name="Editableprofile" options={{ headerShown: false}} />
      <Stack.Screen name="Reviews" options={{ headerShown: false }} />
    </Stack>
  );
}