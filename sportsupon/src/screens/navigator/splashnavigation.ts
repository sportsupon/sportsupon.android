import { createAppContainer, createStackNavigator } from "react-navigation";
import { SplashView } from '../splash'
const SplashNavigation = createStackNavigator({
    Splash: {
        screen: SplashView
    }
}, {
        initialRouteName: 'Splash',
        headerMode: 'none',
    })

export default SplashNavigation