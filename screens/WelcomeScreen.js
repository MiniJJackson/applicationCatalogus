import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text>  </Text>
      <Text>To my <Text style={styles.amazon}> AMAZON </Text>Clothing Catalog</Text>
      <Text>  </Text>
      <Text>  </Text>
      <Button style={styles.goButton} color="#757CA3" title="go to clothing" onPress={() => navigation.navigate('Clothing')}/>
      <StatusBar style="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7CCDF',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#14161F',
    fontSize: '50',
  },
  welcome: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  amazon: {
    color: '#96C6F3',
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 28,
  },
  goButton:{
    position: 'absolute',
    bottom:0,
    left:0
  },
});

export default WelcomeScreen;