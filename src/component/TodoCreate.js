import React ,{useState}from "react";
import styled,{css} from 'styled-components';
import { useTodoDispatch, useTodoNextId } from "../TodoContext";


const Input = styled.input`
    padding: 13px;
    border-radius:1px;
    box-sizing:border-box;
    outline:none;
    width:300px;
    height:50px;
    margin-right:10px;
     border-radius:5px;
    border-color:gray;
    border-width:0.5px;
    
`;

const Button = styled.button`
    width:60px;
    box-sizeing:border-box;
    background:slateblue;
    height:50px;
    color:#F9FFFF;
    border-radius:5px;
    border-color:slateblue;
    border-width:1px;


`



function TodoCreate(){

    const [newText,setNewText]=useState('');

    const dispatch = useTodoDispatch();
    const nextId=useTodoNextId();

    const onChange=(e)=>
        {
            setNewText(e.target.value);
        };
    
    const onClick=()=>{
        dispatch({type:"CREATE",todo:{id:nextId.current,text:newText,check:false}})
        setNewText("");
        nextId.current+=1;
    }
  
    return(
        <div>
            <b><Input autoFocus placeholder="Add New Task" value={newText} onChange={onChange}/></b>
            <span><Button onClick={onClick}>+</Button></span>
        </div>
    )
}

export default TodoCreate;