import Home from "./app/screens/Home";
import Login from "./app/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider, useAuth } from "./app/context/AuthContext";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

const Layout = () => {
  const { state } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state?.authenticated ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
