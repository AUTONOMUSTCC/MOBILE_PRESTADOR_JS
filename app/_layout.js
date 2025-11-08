import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="main" options={{ headerShown: false }} />
      <Stack.Screen name="ProfileModal" options={{ headerShown: false }} />
      <Stack.Screen name="Logged" options={{ headerShown: false }} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="CreateAdd" options={{ headerShown: false }} />
      <Stack.Screen name="Beginning" options={{ headerShown: false }} />
    </Stack>
  );
}