import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Define the props interface
interface ScreenWithMessageProps {
  children: React.ReactNode;
}

// Create the ScreenWithMessage component
const ScreenWithMessage: React.FC<ScreenWithMessageProps> = ({ children }) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.contentContainer}>
        {children}
      </View>
      <View style={styles.messageContainer}>
        <Text>This is a message displayed above the tab bar</Text>
      </View>
    </View>
  );
};

export default ScreenWithMessage;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  messageContainer: {
    padding: 16,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
});