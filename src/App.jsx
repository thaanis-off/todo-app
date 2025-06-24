import { useEffect, useState } from "react";
import "./style.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue); //JSON.parse() convert it from a string back into a JavaScript array
  });

  useEffect(() =>{
    localStorage.setItem("ITEMS", JSON.stringify(todos)) //json.stringfy coverts array into string bcz in the brwsr localstorage we only store string 
  }, [todos])
  // this is one is updated one when we call 2 times or multiple the setTodos actually we pass
  // the function to setTodos that receives the latest state
  // setTodos((currentTodos) => {
    //   return [
    //     ...currentTodos, //call current updated todos array of the state
    //     // create new if empty || set another if not empty id, title and completed to that current todos array
    //     {
    //       id: crypto.randomUUID(),
    //       title: newItem,
    //       completed: false,
    //     },
    //   ];
    // });

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos, //call current updated todos array of the state
        // create new if empty || set another if not empty id, title and completed to that current todos array
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }




  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      //ensure getting updated current todos array
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
