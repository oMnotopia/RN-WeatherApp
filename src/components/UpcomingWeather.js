import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    "dt": 1661871600,
    "main": {
      "temp": 296.76,
      "feels_like": 296.98,
      "temp_min": 296.76,
      "temp_max": 297.87,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 933,
      "humidity": 69,
      "temp_kf": -1.11
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "visibility": 10000,
    "pop": 0.32,
    "rain": {
      "3h": 0.26
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2022-08-30 15:00:00"
  },
  {
    "dt": 1661882400,
    "main": {
      "temp": 295.45,
      "feels_like": 295.59,
      "temp_min": 292.84,
      "temp_max": 295.45,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 931,
      "humidity": 71,
      "temp_kf": 2.61
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 96
    },
    "wind": {
      "speed": 1.97,
      "deg": 157,
      "gust": 3.39
    },
    "visibility": 10000,
    "pop": 0.33,
    "rain": {
      "3h": 0.57
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-08-30 18:00:00"
  },
  {
    "dt": 1661893200,
    "main": {
      "temp": 292.46,
      "feels_like": 292.54,
      "temp_min": 290.31,
      "temp_max": 292.46,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 931,
      "humidity": 80,
      "temp_kf": 2.15
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 2.66,
      "deg": 210,
      "gust": 3.58
    },
    "visibility": 10000,
    "pop": 0.7,
    "rain": {
      "3h": 0.49
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-08-30 21:00:00"
  },
]

const Item = (props) => {
  const {dt_txt, min, max, condition} = props
  return(
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'}/>
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({item}) => (

    <Item 
      condition={item.weather[0].main} 
      dt_txt={item.dt_txt} 
      min={Math.round((item.main.temp_min - 273.15) * 10) / 10 } 
      max={Math.round((item.main.temp_max - 273.15) * 10) / 10 } 
    />
  )
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Text>Upcoming Weather</Text>
      <Image source={require('../../assets/upcoming-weather.jpg')} style={styles.image}/>
      <FlatList 
        data={DATA} 
        renderItem={renderItem}
        keyExtractor={item => item.dt_txt}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  droidSafeArea: {
    backgroundColor: 'red',
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    height:  100,
    width: 100,
  }
})

export default UpcomingWeather