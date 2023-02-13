import { ScrollView } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ScrollView>
      {Object.keys(todos).map((id) => (
        <TodoItem key={id} id={id} deleteTodo={deleteTodo} {...todos[id]} />
      ))}
    </ScrollView>
  );
};

export default TodoList;
