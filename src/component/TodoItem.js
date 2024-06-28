import React, { useState } from 'react';
import styled,{css} from 'styled-components';
import {MdDone, MdDelete, MdOutlineCircle } from 'react-icons/md';
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { useTodoDispatch,useTodoState } from '../TodoContext';



const CheckCircle = styled.div`
    display:flex;
  width: 15px;
  height: 15px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  border-color:black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.check &&
    css`
      border: 1px solid #black;
      color: #black;
    `}
`;

const Remove=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:15px;
    cusor:pointer;
    
`;

const TodoItemBlock = styled.div`
    display:flex;
    align-items:center;
    padding-top:12px;


`;

const Text = styled.div`
    flex:1;
    font-size:15px;
    color:#495057;
    width:120%;
    
   display:${props=>
        (props.editing?"none":"inline")
    }
`;

const Change =styled.div`
    
    font-size:15px;
    margin-right:10px;
    display:${props=>(props.editing?'none':'inline')};
 
`;



const ChangeText=styled.input`
    width:70%;
    margin-right:10px;
    display:${props=>(props.editing?'inline':'none')};
`

const ChangeButton=styled.button`
    background:slateblue;
    color:#F9FFFF;
    border-color:slateblue;
    margin-right:30px;
    font-size:11px;
    width:15%;
    height:100%;
    display:${props=>(props.editing?'inline':'none')};
`




function TodoItem({text,check,id}){
    const dispatch = useTodoDispatch();
    const state=useTodoState();

    const [editing,setEditing] = useState(false);
    const [newtext,setNewText]= useState(text);

    const onEditing=()=>{
        setEditing(true)
    }
    const doneEditing=()=>{
        setEditing(false);
        dispatch({type:'CHANGE',id,newtext})
    }

    const onChange=(e)=>{
        setNewText(e.target.value);
    }

    const onToggle = () =>dispatch({type:'TOGGLE',id});
    const onRemove = ()=> dispatch({type:'REMOVE',id});
    
    return (

        <TodoItemBlock>
            
            < CheckCircle onClick={onToggle} >{check&&<MdDone/>}</ CheckCircle>
            <Text editing={editing}>{text}</Text>
            <ChangeText editing={editing}  value={newtext} onChange={onChange}/>
            <ChangeButton onClick={doneEditing} editing={editing}>완료</ChangeButton>
            <Change onClick={onEditing} editing={editing}><BsFillPencilFill/></Change>
            <Remove onClick={onRemove}><FaTrashAlt/></Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;