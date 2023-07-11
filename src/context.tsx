import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
    ReactNode
  } from "react";
  import "./App.css";

  const todoContext = createContext<string>("");
  const setTodoContext = createContext<Dispatch<SetStateAction<string>>>(
    () => undefined
  );
  
  export const TodoProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
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