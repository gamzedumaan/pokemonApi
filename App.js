import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

/*Screens*/
import DetailScreen from './screen/DetailScreen/DetailScreen';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import { isLoaded, useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    'mrt-shadows': require('./assets/fonts/ShadowsIntoLight-Regular.ttf'),
  });
 // const handleOnLayout = useCallback(async () => {
  //   if (!isLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isLoaded]);
if(!isLoaded){
  null
}

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: 'false' }}>
        <Stack.Screen options={{ headerShown: false }} name="Pokémon" component={HomeScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailScreen"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
