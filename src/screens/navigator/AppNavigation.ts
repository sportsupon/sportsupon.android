
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import HomeNavigation from './homenavigation'
import SignupNavigation from './signupnavigation'
import SplashNavigation from './splashnavigation'


const AppNavigator = createSwitchNavigator({

    splash_nav: SplashNavigation,
    signup_nav: SignupNavigation,
    home_nav:HomeNavigation


}, {
        initialRouteName: 'home_nav'
    });

export default createAppContainer(AppNavigator)