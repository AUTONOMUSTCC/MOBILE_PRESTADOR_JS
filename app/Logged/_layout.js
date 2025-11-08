import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="About" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ headerShown: false }} />
      <Stack.Screen name="Hired" options={{ headerShown: false }} />
      <Stack.Screen name="Horario" options={{ headerShown: false }} />
      <Stack.Screen name="Menssages" options={{ headerShown: false }} />
      <Stack.Screen name="Professionals" options={{ headerShown: false }} />
    </Stack>
  );
}
