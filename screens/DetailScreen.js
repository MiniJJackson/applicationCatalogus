import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Details from '../components/ClothingDetail';

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail</Text>
      <Details detailId={id} />
      <Button title="back to clothing" onPress={() => navigation.navigate('Clothing')}/>
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
  title: {
    fontSize: 24,
    color: "#96C6F3",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
});
export default DetailScreen;