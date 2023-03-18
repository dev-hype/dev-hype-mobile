import React from 'react'
import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

const Home: React.FC = () => {
  return (
    <View>
      <Text>Home</Text>

      <Link href="/profile" asChild>
        <Pressable>
          <Text>Profile</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default Home
