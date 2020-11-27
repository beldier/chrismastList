import React, { Component } from 'react'
import { Text, View, ScrollView , StyleSheet} from 'react-native'
import Banner from '../components/Banner'
import Information from '../components/Information'
import Products from '../components/Products'
import Product from '../models/product'

export class WhishList extends Component {
  products : Product[] =[{
    image: 'https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg',
    name: ' Working ',
    rating: 4.5
  },{
    image: 'https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg',
    name: ' Better ',
    rating: 4.5
  },{
    image: 'https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg',
    name: ' Refact ',
    rating: 4.5
  },{
    image: 'https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg',
    name: ' Muth ',
    rating: 4.5
  },{
    image: 'https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg',
    name: ' Hello ',
    rating: 4.5
  },{
    image: 'https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg',
    name: ' Try ',
    rating: 4.5
  },
    
  ]
  render() {
    return (
      <View style={styles.container}>
          <Banner/>

          <Products products = {this.products}/>

          <Information/>
      </View>
    )
  }
}

export default WhishList

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})