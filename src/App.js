import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import FilterTasks from './components/FilterTasks';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    if (isLoaded) localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, isLoaded]);
  //Add todo
  const addTodo = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === '') return;
    const newTask = {
      text: trimmedText,
      id: uuidv4(),
      isComplete: false,
    };
    setTodos([...todos, newTask]);
    setText('');
  };

  //Submit
  const submitTodo = (e) => {
    e.preventDefault();
    addTodo(text);
  };
  //Delete todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((el) => id !== el.id);
    setTodos(newTodos);
  };
  //is Complete
  const toggleTask = (i) => {
    const updatetTask = todos.map((el) =>
      el.id === i ? {...el, isComplete: !el.isComplete} : el
    );
    setTodos(updatetTask);
  };
  const deleteAllTasks = () => {
    localStorage.removeItem('todos');
    setTodos([]);
    setText('');
  };
  //is Loaded
  if (!isLoaded) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }
  const getIncompletedTasks = () => todos.filter((el) => !el.isComplete).length;
  ////////////////////////////////////

  return (
    <div className="App">
      <div className="header">ToDo App</div>
      <Form
        todos={todos}
        text={text}
        onSubmit={submitTodo}
        setText={setText}
        deleteAllTasks={deleteAllTasks}
      />
      {todos.length > 0 && (
        <FilterTasks getIncompletedTasks={getIncompletedTasks} />
      )}
      <List todos={todos} deleteTodo={deleteTodo} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
