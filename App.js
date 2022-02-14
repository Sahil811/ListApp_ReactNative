import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...courseGoals,{id: Math.random().toString(), value: enteredGoal}]);
  }
  
  return (
     <View style={styles.screen}>
       <View style={styles.inputContainer}>
          <TextInput 
            placeholder='Course Goal'
            style={styles.input}
            onChangeText={goalInputHandler}
          />
          <Button title="Add" onPress={addGoalHandler} />
        </View>       

        <FlatList keyExtractor={(item) => item.id} data={courseGoals} renderItem={itemData => (<View key={itemData.item.data} style={styles.listItem}><Text >{itemData.item.value}</Text></View>)} />
     </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
