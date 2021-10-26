import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';


import { Task } from "./models/task";

const initialState = [
  new Task(1, "task 1"),
  new Task(2, "task 2"),
  new Task(3, "task 3")
]

const TodoReducer = (prevState, typeAction, inputAction) => {
  // if (typeAction == "todo/add") {
  //   return [
  //     ...state.todos,
  //     new Task(
  //       state.todos.length + 1,
  //       inputAction.titleTask
  //     )
  //   ]

  // }
  // else if (typeAction == "todo/delete") {

  // }
  // else if (typeAction == "todo/toggle") {

  // } else {
  //   return state;
  // }

  switch (typeAction) {
    case "todo/add":
      return [...prevState, new Task(
        prevState.length + 1,
          inputAction.titleTask
        )
      ]
    
    default:
      return prevState
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


let newState=TodoReducer(initialState,"todo/add", {titleTask:"task 4"})
console.log(newState)

let newState1=TodoReducer(newState,"todo/add", {titleTask:"task 5"})
console.log(newState1)