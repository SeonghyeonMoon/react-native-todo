import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../colors';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const submit = () => {
    if (text === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <TextInput
      value={text}
      onChangeText={setText}
      onSubmitEditing={submit}
      returnKeyType='done'
      placeholder='할 일을 입력하세요.'
      style={styles.container}
    />
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 14,
  },
});
