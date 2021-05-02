import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContextConsumer } from '../context'
import Home from '../features/home';
import Login from '../features/login';
import { formatMoney } from '../utils'

const Stack = createStackNavigator();

// Create simple stack navigation
const InitialRoutes = () => {
  useEffect(() => {
		return(() => {
      
    });
	}, []);
  return (
    <AppContextConsumer>
      {ctx => {
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              {ctx.token !== '' ? <Stack.Screen name={`Total: $${formatMoney(ctx.totalAmmount)}`} component={Home} /> : <Stack.Screen name="Login" component={Login} />}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      }
    </AppContextConsumer>
  );
};

export default InitialRoutes;