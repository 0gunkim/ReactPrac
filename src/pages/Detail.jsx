import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos";
import styled from "styled-components";


const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <ConSt>
      <InBt>
        <div>ID :{todo.id}</div>
          <TSt>{todo.title}</TSt>
          <BSt>{todo.body}</BSt>
          <Btn
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
              
            >
              뒤로
            </Btn>
            
        
      </InBt>
    </ConSt>
  );
};

export default Detail;

const ConSt = styled.div`
 
  
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InBt = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Btn = styled.button`
margin: 10px auto;
`

const TSt = styled.h1`
  padding: 0 24px;
`;

const BSt = styled.main`
  padding: 0 24px;
`;

