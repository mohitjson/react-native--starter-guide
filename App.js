
import { createAppContainer } from 'react-navigation';/* createappcontainer =>used to wrap  root navigator*/
import { createStackNavigator } from 'react-navigation-stack'; /*   stack navigator => Provides a way for your app to transition between screens where each new screen is placed on top of a stack.By default the stack navigator is configured to have the familiar iOS and Android look & feel*/
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen';
import FlatList1 from './src/screens/FlatList1';
import CounterScreen from './src/screens/CounterScreen';
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import LoginScreen from './src/screens/LoginScreen';
import BoxScreen from './src/screens/BoxScreen';
import ReducerScreen from './src/screens/ReducerScreen';
import CounterTwo from './src/screens/CounterTwo';
import MultiReducer from './src/screens/MultiReducer';




const navigator = createStackNavigator(   
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    Flatlist:FlatList1,
    Image:ImageScreen,
    counter:CounterScreen,
    color:ColorScreen,
    Square:SquareScreen,
    Text:TextScreen,
    Login:LoginScreen,
    Box:BoxScreen,
    Reduce:ReducerScreen,
    counter2:CounterTwo,
    Multi:MultiReducer,
   
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);/* here we wrap navigator into app container */
