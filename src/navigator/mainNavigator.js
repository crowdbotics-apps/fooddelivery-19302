import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps86709Navigator from '../features/Maps86709/navigator';
import Add-Item86708Navigator from '../features/Add-Item86708/navigator';
import Maps86704Navigator from '../features/Maps86704/navigator';
import UserProfile86700Navigator from '../features/UserProfile86700/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps86709: { screen: Maps86709Navigator },
Add-Item86708: { screen: Add-Item86708Navigator },
Maps86704: { screen: Maps86704Navigator },
UserProfile86700: { screen: UserProfile86700Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
