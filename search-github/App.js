import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';


export default function App() {

    

  const [username, setUsername] = useState("SoufianLabed");
  const [user, setUser] = useState({});

  const [fields, setFields] = useState([]);




  

  async function search() {
    
    try {
      
    
      const response = await fetch(`http://localhost:1044/users/${username}`)
      let user = await response.json();
      
        setUser(user);
        setFields(Object.keys(user))

        console.log(user)
         
    } catch (error) {
      console.log(error.message);
    }
  }
 


  return (
    <View style={styles.container}>
    <TextInput 
      style={tailwind('placeholder:italic placeholder:text-gray-400 block border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm')}
      onChangeText={setUsername}
      value={username}
    />

    <Button
      onPress={search}
      title="Search"
      color="#841584"
    />

    <View>
    {fields.length > 0 ? 
      
      (
        <div style={tailwind('rounded-lg border-8 ')}>
          {fields.map(field => (
              
              <div style={tailwind('pl-8 flex block border border-gray-300 rounded-lg bg-green-400 text-center text-blue-900 font-bold')} ><p>{field.replace("_"," ")} : </p><p> {user[field]}</p></div>
                     
          ))}
        </div>
      )
      
      :

      (<div>AUCUNE VALEUR</div>)}


    </View>

 
 
  
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row_user:{
    borderColor: 'black',
    borderWidth : '4px'
  }
});
