import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { colors } from '../colors';

const TodoItem = ({ id, text, deleteTodo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={() => deleteTodo(id)}>
        <Octicons name='trash' size={18} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
  },
});
