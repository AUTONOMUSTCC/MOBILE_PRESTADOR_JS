import { Tabs } from "expo-router";


//SVG'S
import Calendaricon from "../../assets/vectors/Calendaricon";
import Chaticon from "../../assets/vectors/Chaticon";
import CreateAd from "../../assets/vectors/CreateAd";
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
        name="anuncios"
        options={{
          title: "Anuncios",
          tabBarIcon: ({ color, focused }) => (
            <CreateAd color={color}/>
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
        headerShown="false"
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
