import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, FlatList, KeyboardAvoidingView, TouchableOpacity, Platform, Text } from 'react-native';
import { Header } from './components/Header';
import { ListItem } from './components/ListItem';

const data =[
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Task',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Task',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Task',
  },
];
export default function App() {
  
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(data);
  const flatlistRef = useRef();

  const delTask = (title) => {
    setTaskList(taskList.filter((item) => item.id != title))
  }

  const saveData = () => {
    if(task){
      setTaskList([...taskList,{id: Math.random().toString(),title: task}])
      setTask("")
      flatlistRef.current.scrollToEnd({animating: true});

    }
  }

   const renderItem = ({ item }) => (
    <ListItem titleId={item.id} title={item.title}  onPress = {delTask}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header/>  
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ref={flatlistRef}
      />
       {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardViewWrapper}
      >
        <TextInput value={task} style={styles.input} placeholder={'Write a task...'} onChangeText={(text) => setTask(text.trim())} />
        <TouchableOpacity onPress={() => saveData()}>
          <View style={styles.addNewWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 19

  },
  keyboardViewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: "75%"
  },
  addNewWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  }
});
