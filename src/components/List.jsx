import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ConSt = styled.div`
  padding: 0 24px;
`;

const WrapSt = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TodoItSt = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LinkSt = styled(Link)`
  color: gray;
`;

const DoneSt = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;


const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };
  

  return (
    <ConSt>
      <h2>하는중..</h2>
      <WrapSt>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoItSt key={todo.id}>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <DoneSt>
                  <button
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => onToggleStatusTodo(todo.id)} 
                  >
                    {todo.isDone ? "취소" : "완료"}
                    </button>
               
                </DoneSt>
                <LinkSt to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </LinkSt>
              </TodoItSt>
            );
          } else {
            return null;
          }
        })}
        
      </WrapSt>
      <hr></hr>
      <h2 className="list-title">완료!!</h2>
      <WrapSt>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoItSt key={todo.id}>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <DoneSt>
                  <button
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </DoneSt>
                <LinkSt to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </LinkSt>
              </TodoItSt>
            );
          } else {
            return null;
          }
        })}
        
      </WrapSt>
    </ConSt>
  );
};

export default List;

