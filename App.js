import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Boton from "./components/Boton";

export default function App() {
  const Drawer = createDrawerNavigator();

  function myDrawer() {
    return (
      <Drawer.Navigator>
        <StatusBar style="auto" />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    );
  }
  // STACK
  // const Stack = createNativeStackNavigator();
  // return (
  //   <NavigationContainer>
  //     <StatusBar style="auto" />
  //     <Stack.Navigator>
  //       <Stack.Screen name="Inicio" component={Home} />
  //       <Stack.Screen
  //         name="About"
  //         component={About}
  //         options={{
  //           headerBackVisible: false, //Oculta la flecha para volver atras
  //         }}
  //       />
  //       <Stack.Screen name="Contact" component={Contact} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({});
