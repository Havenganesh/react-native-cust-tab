import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from './bottomtabs/Tab1';
import Tab2 from './bottomtabs/Tab2';
import Tab3 from './bottomtabs/Tab3';
import Tab4 from './bottomtabs/Tab4';
import ScreenWithMessage from './ScreenWithMessage';

const BtmTab = createBottomTabNavigator();

const Home = () => {
  console.log("Home Called ")
  useEffect(()=>{
    console.log("Home UseEffect Called")
  },[])
  return (
    <BtmTab.Navigator>
      <BtmTab.Screen name="tab1">
        {() => (
          <ScreenWithMessage>
            <Tab1 />
          </ScreenWithMessage>
        )}
      </BtmTab.Screen>

      <BtmTab.Screen name="tab2">
        {() => (
          <ScreenWithMessage>
            <Tab2 />
          </ScreenWithMessage>
        )}
      </BtmTab.Screen>

      <BtmTab.Screen name="tab3">
        {() => (
          <ScreenWithMessage>
            <Tab3 />
          </ScreenWithMessage>
        )}
      </BtmTab.Screen>
      <BtmTab.Screen name="tab4">
        {() => (
          <ScreenWithMessage>
            <Tab4 />
          </ScreenWithMessage>
        )}
      </BtmTab.Screen>
    </BtmTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    paddingBottom: 50, // Adjust this to make room for the message and tab bar
  },
  messageContainer: {
    height: 50, // Height of the message container
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
