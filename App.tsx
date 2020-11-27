import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import WhishList from './src/pages/WhishList';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <WhishList />
      </View>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  }

});
