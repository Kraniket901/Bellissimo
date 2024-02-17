import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import CartMain from './src/screens/Cart/CartMain';
import ProfileMain from './src/screens/Profile/ProfileMain';
import Signup from './src/screens/Auth/Signup';
import Main from './src/screens/Home/Main';
import Login from './src/screens/Auth/Login';
import OTP from './src/screens/Auth/OTP';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useAuth} from './src/zustand/useAuth';
import ProductMain from './src/screens/Product/ProductMain';
import FindProduct from './src/screens/Product/FindProduct';
import Filter from './src/screens/Product/Filter';
import OrderAccepted from './src/screens/Product/OrderAccepted';
import AccountSidebar from './src/screens/Profile/AccountSidebar';
import {useHome} from './src/zustand/useHome';
import ProductCategories from './src/screens/Product/ProductCategories';

const Stack = createStackNavigator();

const App = () => {
  const {getToken, token, getUserData, user} = useAuth();
  const {getCrousel, getCategories, getProducts} = useHome();
  useEffect(() => {
    getToken();
    getUserData(token);
    getProducts();
    getCrousel();
    getCategories();
    SplashScreen.hide();
  }, [token]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cart">
          <Stack.Screen
            name="Main"
            options={{
              headerShown: false,
            }}
            component={Main}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              animationTypeForReplace: 'pop',
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              animationTypeForReplace: 'pop',
            }}
            name="ProductCategories"
            component={ProductCategories}
          />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen
            name="ProductMain"
            options={{
              headerTitle: 'Bellissimo Toilet Cleaner Original Blue',
              headerTitleStyle: {
                fontFamily: 'Gilroy-Bold',
                fontSize: 16,
              },
              headerShown: true,
            }}
            component={ProductMain}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Cart"
            component={CartMain}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Filter"
            component={Filter}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="FindProduct"
            component={FindProduct}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="OrderAccepted"
            component={OrderAccepted}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="AccountSidebar"
            component={AccountSidebar}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
};

export default App;
