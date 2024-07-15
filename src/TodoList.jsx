import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoList}) => (
    <ul>
        {todoList.map(todo => (
            <TodoListItem key={todo.id} {...todo} />
        ))}
    </ul>
);

export default TodoList;
