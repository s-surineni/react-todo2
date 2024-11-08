import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import { Provider } from 'react-redux';
import store from './redux/configureStore.dev';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;