import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {

  const {
    container, 
    wrapper, 
    tempStyles, 
    feels, 
    highLowWrapper, 
    highLow, 
    bodyWrapper, 
    description, 
    message
  } = styles

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText 
          messageOne={`High: ${temp_max}° `} 
          messageTwo={`Low: ${temp_min}°`} 
          containerStyles={highLowWrapper} 
          messageOneStyles={highLow} 
          messageTwoStyles={highLow}
        />
      </View>
      <RowText 
          messageOne={weather[0]?.description} 
          messageTwo={weatherType[weatherCondition]?.message} 
          containerStyles={bodyWrapper} 
          messageOneStyles={description} 
          messageTwoStyles={message}
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
  wrapper: {
    flex: 1,
  },
  tempStyles: {
    color: 'white',
    fontSize: 48,
  },
  feels: {
    color: 'white',
    fontSize: 30
  },
  highLow: {
    color: 'white',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    color: 'white',
  },
  message: {
    fontSize: 25,
    color: 'white'
  }
})
export default CurrentWeather;