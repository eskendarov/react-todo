import React from 'react';

const AddTodoForm = ({onAddTodo}) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.elements.todoTitle.value;
        console.log(todoTitle);
        onAddTodo(todoTitle);
        event.target.reset();
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title:</label>
            <input id="todoTitle" name="title" type="text"/>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
