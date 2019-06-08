
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

import SignupNavigation from './signupnavigation'
import SplashNavigation from './splashnavigation'

const AppNavigator = createSwitchNavigator({

    splash_nav: SplashNavigation,
    signup_nav: SignupNavigation


}, {
        initialRouteName: 'splash_nav'
    });

export default createAppContainer(AppNavigator)