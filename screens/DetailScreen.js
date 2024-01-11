import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import Details from '../components/ClothingDetail';

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail</Text>
      <ScrollView style={styles.detail}>
        <Details detailId={id} />
      </ScrollView>
      <Button  color="#C6DDF2"  title="back to clothing" onPress={() => navigation.navigate('Clothing')}/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78ABA9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: "#F1C8C1",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  detail: {
    backgroundColor: '#F1F1F1',
    padding: 10,
    marginBottom: 10,
  },
  goButton:{
    padding: 20,
    position: 'absolute',
    bottom:0,
    left:0,
  },
});
export default DetailScreen;