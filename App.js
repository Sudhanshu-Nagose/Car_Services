import { NavigationContainer } from "@react-navigation/native";
// import DrawerNavigator from "./scr/screens/DrawerNavigator";
import BottomTabNavigator from "./scr/screens/BottomTabNavigator";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./scr/screens/Start";
import Start from "./scr/screens/Start";
import Login from "./scr/screens/Login";
import Singup from "./scr/screens/Singup";
import Home from "./scr/screens/Home";
import CurrentLocation from "./scr/screens/CurrentLocation";
import Pincode from "./scr/screens/Pincode";
import Profile from "./scr/screens/Profile";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Start"
        component={Start}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="singup"
        component={Singup}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="CurrentLocation"
        component={CurrentLocation}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Pincode"
        component={Pincode}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Singup"
        component={Singup}
        options={{headerShown: false}}
        />

        {/* <BottomTabNavigator/> */}
      </Stack.Navigator>
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}

//   return (
//       <NavigationContainer>
//         <BottomTabNavigator/>
//       </NavigationContainer>
//   );

export default App;

