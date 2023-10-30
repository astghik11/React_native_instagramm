import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {HomeScreen} from "./src/screens/HomeScreen";



function App(): JSX.Element {

  return (
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
