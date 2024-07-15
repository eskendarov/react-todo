import React, {useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
    const [todos, setTodos] = useState([]);
    const handleAddTodo = (newTodo) => {
        setTodos([...todos, {id: todos.length + 1, title: newTodo}]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todos={todos}/>
            <AddTodoForm onAddTodo={handleAddTodo}/>
        </div>
    );
};

export default App;
