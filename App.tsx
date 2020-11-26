import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

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
        {/* BANNER */}

        <View style={styles.banner}>
          <Text style={styles.bannerText}>WISH LIST CHRISTMAS</Text>
        </View>
        {/* PRODUCTS */}
        <ScrollView style={styles.products}>
          {/* PRODUCT ITEMS */}

          <View style={styles.products}>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
            <View style={styles.productItem}></View>
          </View>
        </ScrollView>
        {/* INFORMATION */}

        <View style={styles.information}>
          <Text>YOU HAVE SELECTED </Text>
          <Text>0 PRODUCTS</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  banner:{
    width:'100%',
    height:200,
    backgroundColor:'#a81817',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText:{
    color: '#ffffff',
    fontSize:40,
    textAlign: 'center',
  },
  information:{
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#c8b3b9',
    height:40,
  },
  products:{
    flex:1,
    padding:16,

  },
  productItem:{
    backgroundColor: '#f0f4f7',
    borderColor: '#c8b3b9',
    borderWidth: 1,
    height:60,
    marginTop:9,

  }

});
