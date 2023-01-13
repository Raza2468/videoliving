import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Camerascreen from "../Camerascreen";
import Camerascreen1 from "../Camerascreen1";
import Camerasceen2 from "../Camerasceen2";
import Camerascreen3 from "../Camerascreen3";
import Devicescreen from "../Devicescreen";
import Homescreen from "../Homescreen";
import Recording from "../Recording";
import Statusscreen from "../Statusscreen";
import CalenderScreen from "../Calendar";
import VideoScreen from "../Video";
import Signup from "../Signup";
import Gridscreen from "../Gridscreen";
import Livingroom from "../Livingroom";
import Notification from "../Notification";
import SettingScreen from "../Setting";

// import Navbar from "../Navbar";
// import Footer from "../Footer";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  
  <Stack.Navigator>
    <Stack.Screen name="signup" component={Signup} />
    <Stack.Screen name="Recording" component={Recording} />
    <Stack.Screen name="Homescreen" component={Homescreen} />
    <Stack.Screen name="Gridscreen" component={Gridscreen} />
    <Stack.Screen name="Livingroom" component={Livingroom} />
    <Stack.Screen name="VideoScreen" component={VideoScreen} />
    <Stack.Screen name="Statusscreen" component={Statusscreen} />
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="Devicescreen" component={Devicescreen} />
    <Stack.Screen name="Camerascreen" component={Camerascreen} />
    <Stack.Screen name="Camerasceen2" component={Camerasceen2} />
    <Stack.Screen name="SettingScreen" component={SettingScreen} />
    <Stack.Screen name="Camerascreen1" component={Camerascreen1} />
    <Stack.Screen name="Camerascreen3" component={Camerascreen3} />
    <Stack.Screen name="CalenderScreen" component={CalenderScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
