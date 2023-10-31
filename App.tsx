import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {Navigator} from "./src/navigation/Navigator";

function App(): JSX.Element {

  return (
      <SafeAreaView style={{flex: 1}}>
        <Navigator/>
      </SafeAreaView>
  );
}

export default App;
