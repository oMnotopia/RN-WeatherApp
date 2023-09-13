import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Text>Upcoming Weather</Text>
      <FlatList 
        data={} 
        renderItem={}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  droidSafeArea: {
    backgroundColor: 'pink',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
})

export default UpcomingWeather