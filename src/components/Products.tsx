import React, { Component } from 'react'
import { Text, View , StyleSheet, ScrollView} from 'react-native'

import Product from '../models/product'
import ProductItem from './ProductItem'
export class Products extends Component<{products: Product[]}> {
  
render() {
    const {products} = this.props
    return (
      <ScrollView style={styles.products}>
        {products.map(product => <ProductItem {...product}/>)}
      </ScrollView>
    )
  }
}

export default Products
const styles = StyleSheet.create({
  products:{
    flex:1,
    padding:16,
    marginBottom:20,
  }
})