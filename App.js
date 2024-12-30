// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import UserProfile from './src/screens/UserProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Post Feed' }} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'User Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

