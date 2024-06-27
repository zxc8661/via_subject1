import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height:768px;

    background : white;
    border-radius:16px;


    margin:0 auto;
    margin-top :96px;
    margin-buttom: 32px;
    display:flex;
    flex-direction:column;
    align-items: center;

`;





function TodoTemplate({children}){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;