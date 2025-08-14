import { Tabs } from "expo-router";


//SVG'S
import Adsicon from "../../assets/vectors/Adsicon";
import Calendaricon from "../../assets/vectors/Calendaricon";
import Chaticon from "../../assets/vectors/Chaticon";
import Homeicon from "../../assets/vectors/Homeicon";
import Profileicon from "../../assets/vectors/Profileicon";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
    tabBarActiveTintColor: "#A0CEE1",
    tabBarInactiveTintColor: "#818898",
    headerShown: false,
  }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <Homeicon color={color} /> 
          ),
        } }
        
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "chat",
          tabBarIcon: ({ color, focused }) => (
            <Chaticon color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="salvos"
        options={{
          title: "Salvos",
          tabBarIcon: ({ color, focused }) => (
            <Adsicon color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: "agenda",
          tabBarIcon: ({ color, focused }) => (
            <Calendaricon color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <Profileicon color={color}/>
          )
        }}
      />
    </Tabs>
   ); 
}
