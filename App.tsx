import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {HomeScreen} from "./src/screens/HomeScreen";
import {SearchScreen} from "./src/screens/SearchScreen";



function App(): JSX.Element {

  return (
    <SafeAreaView>
      {/*<HomeScreen/>*/}
      <SearchScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
