import type {Node} from 'react';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/screens/home";
import HomeCare from "./src/screens/homeCare";
import GetStartedCare from "./src/screens/getStartedCare";
import {Ex1} from "./src/screens/example/ex1";
import {Ex2} from "./src/screens/example/ex2";
import {Ex3} from "./src/screens/example/ex3";
import {Ex4} from "./src/screens/example/ex4";

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Home" component={Home}/>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="GetStartedCare" component={GetStartedCare}/>
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="HomeCare" component={HomeCare}/>
                <Stack.Screen name="Ex1" component={Ex1}/>
                <Stack.Screen name="Ex2" component={Ex2}/>
                <Stack.Screen name="Ex3" component={Ex3}/>
                <Stack.Screen name="Ex4" component={Ex4}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
