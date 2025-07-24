import { Tabs } from "expo-router";


//SVG'S
import Profileicon from "../../assets/vectors/Profileicon";
import Chaticon from "../../assets/vectors/Chaticon";
import Adsicon from "../../assets/vectors/Adsicon";
import Calendaricon from "../../assets/vectors/Calendaricon";
import Homeicon from "../../assets/vectors/Homeicon";


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <Homeicon/>
          ),
        } }
        
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "chat",
          tabBarIcon: ({ color, focused }) => (
            <Chaticon/>
          ),
        }}
      />
      <Tabs.Screen
        name="salvos"
        options={{
          title: "Salvos",
          tabBarIcon: ({ color, focused }) => (
            <Adsicon/>
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: "agenda",
          tabBarIcon: ({ color, focused }) => (
            <Calendaricon/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <Profileicon/>
          )
        }}
      />
    </Tabs>
  );
}
