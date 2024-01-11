import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Details from '../components/ClothingDetail';

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text>ATRICLE - SCREEN</Text>
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
});
export default DetailScreen;