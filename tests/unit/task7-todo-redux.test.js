import todoReducer, { addTodo } from '../../src/tasks/task7-todo-redux/todoSlice';

test('adds a todo item', () => {
  const state = todoReducer([], addTodo('Learn Testing'));
  expect(state).toEqual([{ id: 1, text: 'Learn Testing' }]);
});