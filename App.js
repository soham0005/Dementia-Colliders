import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen';
import CaretakerScreen from './screens/CaretakerScreen';
import PatientScreen from './screens/PatientScreen';
import SortifyGameScreen from './screens/SortifyGameScreen';

const Stack = createStackNavigator();

const CustomHeader = () => (
  <View style={styles.headerBackground} />
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Main"
        screenOptions={{
          headerBackground: () => <CustomHeader />,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
          headerStyle: {
            height: 110,
            backgroundColor: 'transparent',
            elevation: 0, // for Android
            shadowOpacity: 0, // for iOS
          },
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ title: 'Choose User Type' }}
        />
        <Stack.Screen 
          name="Patient" 
          component={PatientScreen} 
          options={{ title: 'Patient Screen' }}
        />
        <Stack.Screen 
          name="Caretaker" 
          component={CaretakerScreen} 
          options={{ title: 'Caretaker Screen' }}
        />
        <Stack.Screen 
          name="Game" 
          component={SortifyGameScreen} 
          options={{ title: 'Sortify Game' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: '#90EE90',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});