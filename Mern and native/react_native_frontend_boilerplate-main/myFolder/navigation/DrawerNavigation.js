import {createDrawerNavigator} from '@react-navigation/drawer';

// components
import CustomDrawer from './CustomDrawer.js';
import Home from '../screens/Home.js';
import Home1 from '../screens/Home1.js';

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <CustomDrawer {...props} />;
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Home1" component={Home1} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
