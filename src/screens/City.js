import { SafeAreaView, Text, StyleSheet } from "react-native";

const City = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Text>City</Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  droidSafeArea: {
    backgroundColor: 'royalblue',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})

export default City