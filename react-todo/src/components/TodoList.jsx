import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const Todolist =  () => {
    const { TodoList, removeTodoList, toggleTodoList } = useTodoStore();

    return (
        <div>
            <h1>Todo List</h1>
        
        <input
        type = "checkbox"
        checked = {TextTrackList.completed}
        removed = {TextTrackList.deleted}
        onchange = {() => toggleTodoList}
        onChange = {() => removeTodoList}>
        </input>

        
        <button 
        onClick = {() => AddTodoForm }> AddTodo </button>
        <button 
        onClick = {() => removeTodoList}> RemoveTodo</button>
        </div>
    )
}

export default TodoList