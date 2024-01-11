import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.text}>To my <Text style={styles.amazon}> AMAZON </Text>Clothing Catalog</Text>
      <Text>  </Text>
      <Text>  </Text>
      <Button style={styles.goButton} color="#C6DDF2" title="go to catalog" onPress={() => navigation.navigate('Clothing')}/>
      <StatusBar style="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78ABA9',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#14161F',
    fontSize: '50',
  },
  text:{
    fontSize: 24,
  },
  welcome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  amazon: {
    color: '#F1C8C1',
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 28,
  },
  goButton:{
    position: 'absolute',
    bottom:0,
    left:0,
  },
});

export default WelcomeScreen;