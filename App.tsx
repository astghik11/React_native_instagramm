import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {Navigator} from "./src/navigation/Navigator";
import {NavigationContainer} from "@react-navigation/native";
import {AppStack} from "./src/navigation/stack/AppStack";
import {HomeScreen} from "./src/screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";



function App(): JSX.Element {

  return (
      <SafeAreaView style={{flex: 1}}>
        <Navigator/>
      </SafeAreaView>
  );
}

export default App;
