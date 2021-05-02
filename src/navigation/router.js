import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContextConsumer, AppContext } from '../context'
import Home from '../features/home';
import Login from '../features/login';

const Stack = createStackNavigator();

const InitialRoutes = () => {
  return (
    <AppContextConsumer>
      {ctx => {
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              {ctx.token !== '' ? <Stack.Screen name="Home" component={Home} /> : <Stack.Screen name="Login" component={Login} />}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      }
    </AppContextConsumer>
  );
};

export default InitialRoutes;