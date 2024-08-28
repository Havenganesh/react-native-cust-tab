import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export class Tab1 extends Component {
  componentDidMount(): void {
    console.log("componentDidMount tab1 ")
  }
  render() {
    console.log("Tab 1 called")
    return (
      <View>
        <Text>Tab1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default Tab1;
