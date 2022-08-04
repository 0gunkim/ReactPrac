import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";




//순서 뼈대를 만든다.
// useState 변경할 데이터들 지정
// dispatch
//조건 인풋에 title or body 텍스트가 없으면 추가 되지 않게 조건 걸어주기 
//useSelector이용해서 확인도 해보기.


const FormSt = styled.form`
    height: 6vh;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    margin: 10px 20px;
    `;
const InputS = styled.div`
     margin: auto;

`;
const BtSt = styled.button`
  background-color: orange;
`



const Form = () => {

    const id = nanoid(); 
// console.log(id); //pmcr7gntvBnO75J9Z0Q-D
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  
    const onChangeHandler = (event) => {
      const { name, value } = event.target;
      setTodo({ ...todo, [name]: value });
    };
    
  
    const onSubmitHandler = (event) => {
      event.preventDefault();
      if (todo.title.trim() === "" || todo.body.trim() === "") return;
  
      dispatch(addTodo({ ...todo, id }));
      setTodo({
        id: 0,
        title: "",
        body: "",
        isDone: false,
      });
    };
  

    return (
        <FormSt onSubmit={onSubmitHandler}>
            <InputS>
            <label>무엇을</label>
            <input 
            type="text"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
            />
            <label>어떻게</label>
            <input 
            type="text"
            name="body"
            value={todo.body}
            onChange={onChangeHandler}
            />
            </InputS>
            <BtSt>추가하기</BtSt>
        </FormSt>
    )
}

export default Form;