import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

// components
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#fff',
        tabBarStyle: {
          height: 60,
          backgroundColor: '#FFF',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 15,
          },
          shadowOpacity: 0.24,
          shadowRadius: 16.41,
          elevation: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="home" size={35} color="#000" />;
          },
          tabBarShowLabel: false,
          tabBarItemStyle: {
            borderTopLeftRadius: 20,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
