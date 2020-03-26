import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screens
import addTask from '../screens/addtask';
import Details from '../screens/details-task';
import HomeFormik from "../screens/homeformik";

//Create Object Stack
const Stack = createStackNavigator()


//Function Main Stack ( rutes )
//Stack object with propeties.
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="addtask">
        <Stack.Screen name='addtask' component={ addTask } />
        <Stack.Screen name='Details' component={ Details }/>
        <Stack.Screen name="Homeformik" component={ HomeFormik } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator