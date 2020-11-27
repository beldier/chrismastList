import React, { Component } from 'react'
import { Text, View, StyleSheet,Image, Button } from 'react-native'

import Product from  '../models/product'
export class ProductItem  extends Component<Product> {

  render() {
    console.log(this.props)
    const {image,name,rating} = this.props
    return (
      <View style={styles.product}>
        <View style={styles.image}>
          <Image source={{uri:image}} style={styles.cover}></Image>
        </View>

        <View style={styles.detail} >
          <View style = {styles.name}>
            <Text numberOfLines={2}>{name}</Text>
          </View>
          <View style = {styles.rating}>
            <Text>{rating}</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button title="Add" onPress={()=>{}}/>
        </View>
      </View>
    )
  }
}

export default ProductItem


const styles = StyleSheet.create({
  product:{
    backgroundColor: 'white',
    borderColor: '#343F4B',
    borderWidth: 1,
    flexDirection :'row',
    height:100,
    padding: 8,
    marginTop: 16,
  },
  image:{
    width: 80,
    paddingRight: 8,
  },
  detail:{
    flex:1,
  },
  actions:{
    width: 100,
    justifyContent: 'center',
    paddingLeft:8,
  },
  name:{
    flex:1
  },
  rating:{
    flex:1,
  },
  cover:{
    width: '100%',
    height: '100%',
  },
  
})