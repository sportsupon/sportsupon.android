import { createAppContainer, createStackNavigator } from "react-navigation";
import { LoginView, SignupView } from '../registration'

const SignupNavigation = createStackNavigator({
    Registraion: {
        screen: SignupView
    },
    Login: {
        screen: LoginView

    },

}, {
        initialRouteName: 'Login'
    });

export default SignupNavigation