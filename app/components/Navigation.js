import navigationConfig from 'app/configs/navigationConfig'
import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator(navigationConfig.RouteConfig, navigationConfig.StackNavigatorConfig);

export default AppNavigator