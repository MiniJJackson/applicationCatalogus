
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';


const ClothingDetail = props => {
  const [detail, setDetail] = useState({});
  // console.log(props.detailId);
  const getDetailData = async () => {
    try {

      let url;
      if (Platform.OS == 'android') {
        //ddev describe om port number te weten te komen

        url = "http://10.0.2.2:32775/api/clothing/";
      }
      else {
        url = "http://website-catalogue.ddev.site/api/clothing/";
      }
      url += props.detailId;
      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();
      console.log(json.thumbImg);
      if (Platform.OS == 'android') {
        json.thumbImg = json.thumbImg.replace('website-catalogue.ddev.site', '10.0.2.2:32775');
      }
      setDetail(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: detail.thumbImg
        }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{detail.title}</Text>
        <Text style={styles.body}>{detail.fullText}</Text>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
  },
  wrapper: {
    padding: 24,
    listStyle: "none",
  },
  title: {
    fontSize: 24,
    color: "#96C6F3",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  body: {
    lineHeight: 24

  }
});
export default ClothingDetail;