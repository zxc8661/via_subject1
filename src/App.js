import logo from './logo.svg';
import './App.css';
import {createGlobalStyle,styled} from 'styled-components';
import TodoTemplate from './component/TodoTemplate';
import TodoCreate from './component/TodoCreate';
import TodoList from './component/TodoList';
import { TodoProvider ,useTodoState} from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(to right bottom, slateblue, thistle);
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
  }
`;


const H1=styled.h1`
  margin-top:50px;
`


function App() {
  
  return (
      <>
        <TodoProvider>
          <GlobalStyle/>
            <TodoTemplate>
          
                <H1>
                To Do List
                </H1>               
                
              <TodoCreate/>
              <TodoList/>

            </TodoTemplate>
        </TodoProvider>
      </>
  );
}

export default App;
