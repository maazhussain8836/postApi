// Making a simple name and email form and post api and show array in console -----
import {View, Text, Pressable, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/comments';
const baseURL2='https://reqres.in/api/users?page/3'
const PostApi = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const hitApi = () => {
    axios
      .post(baseURL, {
        name: name,
        email: email,
      })
      .then(res => {
        console.log(res);
      });
    setEmail(null);
    setName(null);
    alert('Api hittt');
  };

  useEffect(() => {
    axios.get(baseURL).then(res => {
      data=res.data;
      data.map((v)=>{
        mapData=v;
        console.log(mapData.email)
      })
    //  console.log(mapData.slice(0,20)) 
    });
  }, []);

  
  return (
    <View>
      <Pressable>{/* <Text onPress={hitApi}>PostApi</Text> */}</Pressable>
      <TextInput
        style={{borderWidth: 1, margin: '3%'}}
        onChangeText={e => setName(e)}
        value={name}
        placeholder="Name "
      />
      <TextInput
        style={{borderWidth: 1, margin: '3%'}}
        onChangeText={e => setEmail(e)}
        value={email}
        placeholder="Email "
      />

      <View style={{margin: '5%'}}>
        <Button title="Submit Details" onPress={hitApi} />
      </View>
    </View>
  );
};

export default PostApi;
