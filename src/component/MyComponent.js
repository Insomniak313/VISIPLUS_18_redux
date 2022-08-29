import {Button, StyleSheet, Text, View} from 'react-native'

const MyComponent = ({nbClick, onPress}) => (
  <View style={style.container}>
    <Text style={style.title}>{'Vous avez cliqué ' + nbClick + ' fois !'}</Text>
    <Button title={'Cliquez moi !'} onPress={onPress} />
  </View>
)

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    padding: 20,
  },
  title: {
    fontSize: 40,
  }
})

export default MyComponent
