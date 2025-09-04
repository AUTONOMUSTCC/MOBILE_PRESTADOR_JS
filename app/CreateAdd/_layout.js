import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="description" options={{ headerShown: false }} />
      <Stack.Screen name="Workexperience" options={{ headerShown: false }} />
    </Stack>
  );
}
