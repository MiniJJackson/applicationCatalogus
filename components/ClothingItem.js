import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ClothingItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectedClothing(props.id)}>
      <View style={styles.clothingItem}>
        <Image
          style={styles.banner}
          source={{
            uri: props.banner
          }}
        />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.intro}>{props.intro}</Text>
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  clothingItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    shadowRadius: 1,
    shadowColor: "#3A9AA2",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
  },
  banner: {
    height: 100
  },
  title: {
    fontWeight: "bold",
    color: "#96C6F3",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textTransform: "uppercase"
  },
  intro: {
    marginBottom: 8
  }
});
export default ClothingItem;