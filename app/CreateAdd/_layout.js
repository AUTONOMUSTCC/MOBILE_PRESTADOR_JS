import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="description" options={{ headerShown: false }} />
      <Stack.Screen name="Workexperiences" options={{ headerShown: false }} />
      <Stack.Screen name="Topicswork" options={{ headerShown: false }} />
      <Stack.Screen name="HighLigths" options={{ headerShown: false }} />
      <Stack.Screen name="ServiceMode" options={{ headerShown: false }} />
       <Stack.Screen name="ValueperHour" options={{ headerShown: false }} />
    </Stack>
  );
}
