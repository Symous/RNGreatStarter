import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import Counter from './pages/Counter';

// HomeTab必须定义在RootStack上方，否则在RootStack中找不到HomeTab
const HomeTab = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Counter: {
        screen: Counter,
    },
});

const RootStack = createStackNavigator({
    Login,
    Home: HomeTab,
});

export default createAppContainer(RootStack);
