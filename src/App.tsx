import{InputForm} from './components/InputForm';
import{Title} from './components/Title';
import{TodoList} from './components/TodoList';
import "./App.css"
import { Modal } from './components/Modal';
import {TodoProvider} from './context';
import { useState } from 'react';

export type Task = {
  id:number,
  text:string,
  completed:boolean
};



export function App() {

  // taskListを状態管理するためのhookにuseStateを使う
  const [taskList, setTaskList] = useState<Task[]>([]);

  // Modalの表示状態変数
  const [show, setShow] = useState<boolean>(false);

  return(
    <div className = "body">
    <Title />
    <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoProvider>
       <TodoList taskList={taskList} setTaskList={setTaskList} setShow={setShow}/>
        <Modal show={show} setShow={setShow}/>
      </TodoProvider>
    </div>
  );
}

