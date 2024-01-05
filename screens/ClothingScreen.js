import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const CothingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CLOTHING - SCREEN</Text>
      <Button title="Go to details" onPress={() => navigation.navigate('Details')}/>
      <Button title="back to start" onPress={() => navigation.navigate('Welcome')}/>
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
export default CothingScreen;