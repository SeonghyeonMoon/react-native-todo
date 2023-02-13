import { ScrollView } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ScrollView>
      {Object.keys(todos).map((id) => (
        <TodoItem key={id} id={id} {...todos[id]} />
      ))}
    </ScrollView>
  );
};

export default TodoList;
