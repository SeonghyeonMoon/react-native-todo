import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from './colors';
import { StatusBar } from 'expo-status-bar';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {
  const [todos, setTodos] = useState({});

  const addTodo = (text) => {
    const newTodo = { [Date.now()]: { text, completed: false } };
    setTodos({ ...todos, ...newTodo });
  };

  const deleteTodo = (id) => {
    const newTodos = { ...todos };
    delete newTodos[id];
    setTodos(newTodos);
  };

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
