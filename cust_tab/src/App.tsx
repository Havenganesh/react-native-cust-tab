// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './screens/Home';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
var myGarden=["butterFly","planets","rosePlant"]
type MyComp = {
  props: any & {style: any};
};

function App() {
  console.log('App called');
  React.useEffect(() => {
    console.log('App useEffect Called');
  });

  const myName = (
    <View>
      <Text style={{backgroundColor: 'pink'}}>I am a joker</Text>
      <Text style={{backgroundColor: 'pink'}}>I am a joker2</Text>
    </View>
  );

  const sampName =(
    <>
    </>
  )

  console.log(myName.props);
  return (
    <View style={{backgroundColor: 'red', flex: 1, justifyContent: 'center'}}>
      {genTextArray(myGarden)}
    </View>
  );
}

export default App;

function setCenter(comp: React.JSX.Element) {
  // comp.props.style.backgroundColor="grey"
  // comp.props.style.alignSelf='center'

  for (let prop in comp.props) {
    console.log(prop, ' : ', typeof comp.props[prop]);
  }

  return comp;
}

function createText(data:string){
  return <Text key={data}>{data}</Text>
}

function genTextArray(data:string[]){
  let TextArr: any[]=[]
  for (const item of data) {
    TextArr.push(createText(item))
  }
  return <>{TextArr}</>
}
