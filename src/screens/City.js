import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  ImageBackground,
  View
 } from "react-native";
import IconText from "../components/IconText";
import moment from 'moment'

const City = ({ weatherData }) => {
  const { 
    container, 
    wrapper,
    cityName, 
    cityText, 
    countryName, 
    populationWrapper, 
    populationText, 
    riseSetWrapper, 
    riseSetText,
    rowLayout,
    imageLayout 
  } = styles

  const { name, country, population, sunrise, sunset } = weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/city-background.jpg')} style={imageLayout}>
        <View style={wrapper}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText 
              iconName={'user'} 
              iconColor={'red'} 
              bodyText={`population: ${population}`} 
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText 
              iconName={'sunrise'} 
              iconColor={'white'} 
              bodyText={moment(sunrise).format('h:mm a')} 
              bodyTextStyles={riseSetText}
            />
            <IconText 
              iconName={'sunset'} 
              iconColor={'white'} 
              bodyText={moment(sunset).format('h:mm p')} 
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
     fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red'
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    padding: 30
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  }
})

export default City