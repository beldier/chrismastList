import React, { Component } from 'react'
import { Text,StyleSheet, View } from 'react-native'

export class Banner extends Component {
  render() {
    return (
      <View style={styles.banner}>
      <Text style={styles.bannerText}>WISH LIST CHRISTMAS</Text>
    </View>
    )
  }
}

export default Banner

const styles = StyleSheet.create({

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
})