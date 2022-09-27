// ---------------here we use FlatList to get Api data and send api data to Map.js by using Params 
// for filteration.....
import { View, Text,ScrollView ,FlatList, SafeAreaView,Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'

const axios=require('axios').default
const baseURL='https://jsonplaceholder.typicode.com/comments'
const FlatListData = ({navigation}) => {
    const [data,setData]=useState([])

    useEffect(() => {
     axios.get(baseURL).then((res)=>{
        // console.log(res.data)
        let arr=[];
        res.data.map((v)=>{
            arr.push(v)
            // console.log(v.id)
          })
          const saveData= arr.slice(10,30)
          // saveData.map((v)=>{
          //   console.log(v.name)
          // })
          setData(saveData)
          // console.log(data)
     })
    }, [])
    
  return (
      <SafeAreaView style={{flex:1}}>
            <FlatList 
            data={data}
            renderItem={(item)=>{
              return(
                <View>
                  <Pressable onPress={()=>{navigation.navigate('Map', {
                  itemId: item.item.id,
                  itemName: item.item.name
          })}}>
                  <Text >
                    {item.item.id} {'\n'}
                    {item.item.name}
                  </Text>
                  </Pressable>
                </View>
                // console.log(item.item.id)
                
              )
            }}
            />
        </SafeAreaView>
    
  )
}

export default FlatListData