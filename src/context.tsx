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
  
  const todoContext = createContext<string>("");
  const setTodoContext = createContext<Dispatch<SetStateAction<string>>>(
    () => undefined
  );
  
  const TodoProvider: FC<ReactNode> = (children:ReactNode) => {
    const [todo, setTodo] = useState<string>("");
  
    return (
      <todoContext.Provider value={todo}>
        <setTodoContext.Provider value={setTodo}>
          {children}
        </setTodoContext.Provider>
      </todoContext.Provider>
    );
  };
  
  export const useTodoValue = () => useContext(todoContext);
  export const useSetTodoValue = () => useContext(setTodoContext);