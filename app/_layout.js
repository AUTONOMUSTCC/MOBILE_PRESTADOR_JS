import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="main" options={{ headerShown: false }} />
      <Stack.Screen name="introduction" options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword" options={{ headerShown: true }} />
      <Stack.Screen name="forgotPasswordCode" options={{ headerShown: false }} />
      <Stack.Screen name="newPassword" options={{ headerShown: false }} />
    </Stack>
  );
}
