import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
  } from "react";
  import "./App.css";
import { JsxElement } from "typescript";
  
interface ContextProps {
    children: JSX.Element | JSX.Element[]
}

  const todoContext = createContext<string>("");
  const setTodoContext = createContext<Dispatch<SetStateAction<string>>>(
    () => undefined
  );
  
  export const TodoProvider = (props:ContextProps):JSX.Element => {
    const [todo, setTodo] = useState<string>("");
  
    return (
      <todoContext.Provider value={todo}>
        <setTodoContext.Provider value={setTodo}>
          {props.children}
        </setTodoContext.Provider>
      </todoContext.Provider>
    );
  };
  
  export const useTodoValue = () => useContext(todoContext);
  export const useSetTodoValue = () => useContext(setTodoContext);