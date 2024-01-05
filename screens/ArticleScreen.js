import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const ArticleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ATRICLE - SCREEN</Text>
      <Button title="back to clothing" onPress={() => navigation.navigate('Clothing')}/>
      <StatusBar style="auto" />
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
export default ArticleScreen;