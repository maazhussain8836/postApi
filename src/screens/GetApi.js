// --------------here we get api and use Map function to render api data----------

import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

const axios = require('axios').default;
const baseURL = 'https://jsonplaceholder.typicode.com/comments';

const GetApi = () => {
  const [data,setData]=useState()
  useEffect(() => {
    axios.get(baseURL).then(res => {
      // console.log(res.data);
      let arr=[];
      res.data.map((v)=>{
        arr.push(v)
        // console.log(arr)
      })
      let array=arr.slice(0,20)
      setData(array)
      // console.log(array)
      // here we set state (setData) of final array in (Data)
    });
  }, []);

  return (
<ScrollView>
  {
   data?.map((v)=>{
    return(
      <>
      <Text>ID NO :{v.id} </Text>
      </>
    )
   }) 
  }
</ScrollView>
  );
};

export default GetApi;
