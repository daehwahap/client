import React from 'react'
import { Button, Text, View } from 'react-native'

function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1, paddingVertical: 40 }}>
      <View style={{ backgroundColor: 'white' }}>
        <Button title="aaaaaaaa" color="blue" onPress={() => console.log('aa')} />
      </View>
      <View>
        <Text>aaaaaaaaaaaaa </Text>
      </View>
    </View>
  )
}

export default App
