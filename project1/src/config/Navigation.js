import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import { Image } from "react-native";
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* //jo saub se upr wo sub se phele yani root */}
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            // headerTintColor: "yellow",
            headerTitle: (props) => (
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={{
                  uri:
                    "https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png",
                }}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
