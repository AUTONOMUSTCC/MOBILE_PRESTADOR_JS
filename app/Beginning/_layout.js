import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="introduction" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false}} />
      <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
      <Stack.Screen name="forgotPasswordCode" options={{ headerShown: false }} />
      <Stack.Screen name="newPassword" options={{ headerShown: false }} />
    </Stack>
  );
}