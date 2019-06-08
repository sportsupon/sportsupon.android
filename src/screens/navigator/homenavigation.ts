import { createAppContainer, createStackNavigator } from "react-navigation";
import { DashboardView } from '../home'

const HomeNavigation = createStackNavigator({
    Dashboard: {
        screen: DashboardView
    },
    
}, {
        initialRouteName: 'Dashboard'
    });

export default HomeNavigation