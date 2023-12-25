import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./screens/LandingPage";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import VehicleOwnerHomeScreen from "./screens/VehicleOwnerHomeScreen";
import WorkerHomeScreen from "./screens/WorkerHomeScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import HomeServiceScreen from "./screens/HomeService";
import BookAppointment from "./screens/BookAppointment";
import Schedule from "./screens/Schedule";
import SubmitDailyProgress from "./screens/SubmitDailyProgress";
import PaymentQuery from "./screens/PaymentQuery";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="VehicleOwnerHomeScreen"
          component={VehicleOwnerHomeScreen}
        />
        <Stack.Screen name="HomeService" component={HomeServiceScreen} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="WorkerHomeScreen" component={WorkerHomeScreen} />
        <Stack.Screen
          name="SubmitDailyProgress"
          component={SubmitDailyProgress}
        />
        <Stack.Screen name="PaymentQuery" component={PaymentQuery} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
