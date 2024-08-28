import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Tab4 = () => {
  console.log("tab 4 called")
  useEffect(()=>{
    console.log("tab 4 use effect called")
  },[])
  return (
    <View>
      <Text>Tab4</Text>
    </View>
  )
}

export default Tab4

const styles = StyleSheet.create({})