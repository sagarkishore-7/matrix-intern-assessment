import React from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  return (
    <View>
      <TextInput
        testID="todo-input"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button
        testID="add-button"
        title="Add Todo"
        onPress={() => dispatch(addTodo(newTodo))}
      />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text testID="todo-item">{item.text}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}