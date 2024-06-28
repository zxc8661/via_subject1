import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem'
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
 flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
   width:70%;
`;


function TodoList(){
    
    const todos=useTodoState();
    return (
        
            
            <TodoListBlock>
                {todos.map(todo=>(
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        check={todo.check}
                        />


                ))}
            </TodoListBlock>
            
        
    );
}

export default TodoList;