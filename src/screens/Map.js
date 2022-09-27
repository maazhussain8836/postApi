// ----------- here we getting response then filter data and show ....
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

// const axios = require('axios').default;
const baseURL = 'https://jsonplaceholder.typicode.com/comments';

const Map = ({route, navigation}) => {
  
  const {itemId, itemName} = route.params;
  const [fliterData,setFliterData]=useState('')

  useEffect(() => {
    axios.get(baseURL).then(res => {
      let arr;
      // arr = res.data;
     arr = res.data.filter(v => {
      return v.id == itemId;
      });
      console.log(arr[0].name);
      // console.log(arr[0])
      setFliterData(arr[0])
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* here is the data which we get from routing params */}
      {/* <Text>ID :{itemId}</Text>
      <Text>NAME : {itemName}</Text> */}
      <Text>ID NO :{fliterData.id} </Text>
      <Text>NAME : {fliterData.name}</Text>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Map;
