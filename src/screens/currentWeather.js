import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import RowText from '../components/RowText';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <RowText 
          messageOne={"High: 8"} 
          messageTwo={"Low: 6"} 
          containerStyles={styles.highLowWrapper} 
          messageOneStyles={styles.highLow} 
          messageTwoStyles={styles.highLow}
        />
      </View>
      <RowText 
          messageOne={"It's Sunny"} 
          messageTwo={"It's perfect t'shirt weather"} 
          containerStyles={styles.bodyWrapper} 
          messageOneStyles={styles.description} 
          messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  droidSafeArea: {
    backgroundColor: 'pink',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather;