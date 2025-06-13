import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterLocationScreen from './screens/RegisterLocationScreen';
import MapScreen from './screens/MapScreen';
import LocationsListScreen from './screens/LocationsListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen 
          name="Register" 
          component={RegisterLocationScreen} 
          options={{ title: 'Registrar Local' }} 
        />
        <Stack.Screen 
          name="Map" 
          component={MapScreen} 
          options={{ 
            title: 'Mapa de Locais',
            headerLeft: () => null
          }} 
        />
        <Stack.Screen 
          name="List" 
          component={LocationsListScreen} 
          options={{ title: 'Lista de Locais' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}