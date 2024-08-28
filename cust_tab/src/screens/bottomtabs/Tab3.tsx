import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Tab3 = () => {
  const [val, setval] = useState<number>(0);
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    console.log('tab 3 use effect called');
    setInit(false)
    setTimeout(()=>{
      setInit(true)
    },2000)
  }, [val]);

  if (!init) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  console.log('tab 3 called');

  const inc = () => {
    setval(prev => prev + 1);
  };

  return (
    <View>
      <Text>Tab3 {val}</Text>
      <TouchableOpacity onPress={inc}>
        <Text>button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tab3;

const styles = StyleSheet.create({});
