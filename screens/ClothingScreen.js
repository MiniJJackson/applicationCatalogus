import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, Button, FlatList, Platform} from 'react-native';

import ClothingItem from '../components/ClothingItem';

const ClothingScreen = ({ navigation }) => {
  const [clothing, setClothing] = useState([]); /* om status variabelen bij te houden*/

  const getAllClothing = async () => {
    try{
      //10.0.2.2:52989 -> op laptop
      //10.0.2.2:32775 -> op laptop thuis
      //http://website-catalogue.ddev.site -> op server (ddev)

      let url;

      if(Platform.OS == 'android'){
        url = "http://10.0.2.2:32775/api/clothing/";
      }else{
          url = "http://website-catalogue.ddev.site/api/clothing/";
      }

      const response = await fetch(url, { "method": "GET" });
      const json = await response.json();
      
      console.log(json.items);

      setClothing(json.items);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => { // Helps you syncronize component with extrnal system - server
    getAllClothing();
  }, []);

  //* RETURN *//

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Clothing</Text>
      {/*FLATLIST FOR LIST*/}

      <FlatList
        style={styles.list}
        data={clothing}
        keyExtractor={item => item.id}//gebruik id als key voor flatlist
        renderItem={({item})=> {
          if (Platform.OS == 'android'){
            item.bannerImg = item.bannerImg.replace('website-catalogue.ddev.site', '10.0.2.2:32775');
          }

          console.log(item.bannerImg);

          return <ClothingItem
            id={item.id}
            title={item.title}
            brand={item.brand}
            intro={item.intro}
            banner={item.bannerImg}
            navigation={navigation}
            onSelectedClothing={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
          />
        }}
      />

      {/*VIEW FOR BUTTON*/}
      <View style={styles.buttons}>
      <Button title="back to start" onPress={() => navigation.navigate('Welcome')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78ABA9',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  list: {
    height: "90%",
    margin: 10,
  },
  title: {
    fontSize: 24,
    color: "#96C6F3",
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    marginTop: 20,
  },
});
export default ClothingScreen;