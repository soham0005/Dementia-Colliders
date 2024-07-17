import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen';
import CaretakerScreen from './screens/CaretakerScreen';
import PatientScreen from './screens/PatientScreen';
import SortifyGameScreen from './screens/SortifyGameScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#90EE90',
        },
        headerTintColor: '#000', // This sets the color of the back button and title
        headerTitleStyle: {
          fontWeight: 'bold',
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