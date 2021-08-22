import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Start Screen Declaration (Lets go)
function StartScreen({ navigation }) {
  //Function to Hide NavBar
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  //////////////////////////
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Start Screen</Text>
      <Button
        title="Lets Go"
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
    </View>
  );
}

//Home Screen Declaration
function HomeScreen({ navigation }) {
  //Function to Hide NavBar
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  //////////////////////////
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Signs Screen"
        onPress={() => navigation.navigate("SignsScreen")}
      ></Button>
      <Button
        title="Test Screen"
        onPress={() => navigation.navigate("TestScreen")}
      ></Button>
      <Button
        title="Support Screen"
        onPress={() => navigation.navigate("SupportScreen")}
      ></Button>
    </View>
  );
}

//Signs Screen Declaration
function SignsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Signs Screen</Text>
    </View>
  );
}

//Tests Screen Declaration
function TestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tests Screen</Text>
    </View>
  );
}

//Support Screen Declaration
function SupportScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Support Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Start Screen */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="StartScreen"
          options={{
            title: "",
          }}
          component={StartScreen}
        />

        {/* Home Screen */}
        <Stack.Screen
          name="HomeScreen"
          options={{ title: "Title Home Screen" }}
          component={HomeScreen}
        />
        {/* Signs Screen */}
        <Stack.Screen
          name="SignsScreen"
          options={{ title: "Title Signs Screen" }}
          component={SignsScreen}
        />
        {/* Tests Screen */}
        <Stack.Screen
          name="TestScreen"
          options={{ title: "Title Test Screen" }}
          component={TestScreen}
        />
        {/* Support Screen */}
        <Stack.Screen
          name="SupportScreen"
          options={{ title: "Title Support Screen" }}
          component={SupportScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
