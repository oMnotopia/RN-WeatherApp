import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  ImageBackground,
  View
 } from "react-native";
 import { Feather } from '@expo/vector-icons'


const City = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
        <Text style={[styles.cityName, styles.cityText]}>Vancouver</Text>
        <Text style={[styles.countryName, styles.cityText]}>Canada</Text>
        <View style={styles.populationWrapper}>
          <Feather name={'user'} size={50} color={'red'}/>
          <Text style={styles.populationText}>100000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name={'sunrise'} size={50} color={'white'}/>
          <Text style={styles.riseSetText}>10:56:20am</Text>
          <Feather name={'sunset'} size={50} color={'white'}/>
          <Text style={styles.riseSetText}>17:10:28pm</Text>
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
    fontWeight: "bold",
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
    fontWeight: "bold"
  }

})

export default City