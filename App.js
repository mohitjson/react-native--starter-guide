
import { createAppContainer } from 'react-navigation';/* createappcontainer =>used to wrap  root navigator*/
import { createStackNavigator } from 'react-navigation-stack'; /*   stack navigator => Provides a way for your app to transition between screens where each new screen is placed on top of a stack.By default the stack navigator is configured to have the familiar iOS and Android look & feel*/
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen';
import FlatList1 from './src/screens/FlatList1';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(   
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    Flatlist:FlatList1,
    Image:ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);/* here we wrap navigator into app container */
