import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  ImageBackground,
  View
 } from "react-native";
 import { Feather } from '@expo/vector-icons'
import IconText from "../components/IconText";


const City = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
        <Text style={[styles.cityName, styles.cityText]}>Vancouver</Text>
        <Text style={[styles.countryName, styles.cityText]}>Canada</Text>
        <View style={styles.populationWrapper}>
          <IconText 
            iconName={'user'} 
            iconColor={'red'} 
            bodyText={'100000'} 
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText 
            iconName={'sunrise'} 
            iconColor={'white'} 
            bodyText={"10:56:20am"} 
            bodyTextStyles={styles.riseSetText}
          />
          <IconText 
            iconName={'sunset'} 
            iconColor={'white'} 
            bodyText={"17:10:28pm"} 
            bodyTextStyles={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  imageLayout: {
    flex: 1
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
    color: 'white'
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  }

})

export default City