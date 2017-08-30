import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';

export default class ListingInfo extends Component  {

  render(){
    return(
      <View style={styles.container} >
        <Text>Seller: {this.props.listing.lister_name}</Text>
        <Text>Summary: {this.props.listing.summary}</Text>

        <Text>Number of bathrooms: {this.props.listing.bathroom_number}</Text>
        <Text>{this.props.listing.lister_name}</Text>
        <Text>{this.props.listing.lister_name}</Text>


      </View>

    )
  }

}
const styles= StyleSheet.create({

  description: {
    marginBottom: 20,
    fontSize:18,
    color: '#656565',

  },
  container: {
    padding: 30,
    marginTop: 65,
  },

})
