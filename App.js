import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [date, setDate] = useState("Текущая дата");

  const updateDate = () => {
    setDate(new Date().toDateString());
  }

  return (
    <View style={styles.container}>
      <Text>{date}</Text>
      <Button title="Get date!" onPress={updateDate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
