import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Information extends Component {
  render() {
    return (
      <View style={styles.information}>
      <Text>YOU HAVE SELECTED </Text>
      <Text>0 PRODUCTS</Text>
    </View>
    )
  }
}

export default Information

const styles = StyleSheet.create({
  information:{
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#c8b3b9',
    height:40,
  },
})
