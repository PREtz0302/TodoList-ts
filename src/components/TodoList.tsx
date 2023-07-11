import {Dispatch, SetStateAction} from 'react';
import {Task} from '../App';
import { useSetTodoValue } from '../context';

export const TodoList = ({taskList, setTaskList, setShow} : {taskList:Task[], setTaskList:Dispatch<SetStateAction<Task[]>>, setShow:Dispatch<SetStateAction<boolean>>}) =>{
    const handleDelete = (id:number) =>{
        setTaskList(taskList.filter((task) =>task.id !== id));
    }

    const handleCompleted = (id:number) =>{
        setTaskList(taskList.map((task) =>{
            if(id===task.id){
                return{
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        }))
    }

    const setTodo = useSetTodoValue();
    

    return(
        <div className='todoList'>
            <div className="todos">
                {/* ここのtodos divいる？ */}
                {taskList.map((task, index) =>{
                     
                    return(
                    // taskList配列をmap関数で取り出すループ構造
                    <div className={`todo ${task.completed ?"completed" : ""}`} key={index}>
                        <div className = "todoText" onClick = {() => {
                            setTodo(task.text);
                            setShow(true);
                            }}>
                            <span>
                                {task.text}
                            </span>
                        </div>
                        <div className="icons">
                            <button onClick={() => handleCompleted(task.id)}>
                            <i className="fa-solid fa-check"></i>
                            </button>
                            <button onClick={() => handleDelete(task.id)}>
                            <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}