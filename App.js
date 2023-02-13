import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from './colors';
import { StatusBar } from 'expo-status-bar';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Loading from './components/Loading';
import Error from './components/Error';

const STORAGE_KEY = '@todos';

const App = () => {
  const [todos, setTodos] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const result = await AsyncStorage.getItem(STORAGE_KEY);
      if (result) {
        setTodos(JSON.parse(result));
      }
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  const saveTodos = async (value) => {
    try {
      setLoading(true);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  const addTodo = async (text) => {
    const newTodos = { ...todos };
    newTodos[Date.now()] = { text, completed: false };
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const deleteTodo = async (id) => {
    Alert.alert('Delete Todo', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const newTodos = { ...todos };
          delete newTodos[id];
          setTodos(newTodos);
          await saveTodos(newTodos);
        },
      },
    ]);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  if (error) return <Error />;

  if (loading) return <Loading />;

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
