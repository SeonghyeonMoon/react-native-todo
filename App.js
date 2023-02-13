import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from './colors';
import { StatusBar } from 'expo-status-bar';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const STORAGE_KEY = '@todos';

const App = () => {
  const [todos, setTodos] = useState({});

  const loadTodos = async () => {
    try {
      const result = await AsyncStorage.getItem(STORAGE_KEY);
      setTodos(result ? JSON.parse(result) : {});
    } catch (e) {
      console.log(e);
    }
  };

  const saveTodos = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  const addTodo = async (text) => {
    const newTodos = { ...todos };
    newTodos[Date.now()] = { text, completed: false };
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const deleteTodo = async (id) => {
    const newTodos = { ...todos };
    delete newTodos[id];
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});

export default App;
