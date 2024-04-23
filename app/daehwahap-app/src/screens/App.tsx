import React from 'react'
import { Button, Text, View } from 'react-native'
import { trpc } from '../trpc'

function App(): React.JSX.Element {
  const handle회원가입Press = async () => {
    await trpc.createUser.mutate({ email: 'aa', password: 'aa', name: '최봉수' })
  }

  return (
    <View style={{ flex: 1, paddingVertical: 40 }}>
      <View style={{ backgroundColor: 'white' }}>
        <Button title="회원가입" color="blue" onPress={handle회원가입Press} />
      </View>
      <View>
        <Text>aaaaaaaaaaaaa </Text>
      </View>
    </View>
  )
}

export default App
