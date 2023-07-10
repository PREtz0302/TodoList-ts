import React from 'react';
import{useState} from'react';
import {Task} from '../App';

export const InputForm = ({taskList,setTaskList}:{taskList:Task[], setTaskList:React.Dispatch<React.SetStateAction<Task[]>>}) =>{
    // inputTextを状態管理するためのhookにuseStateを使う
    const[inputText, setInputText] = useState("");

    // submitボタンが押されるかsubmitされたときの処理
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(inputText.length!==0){
            setTaskList([
                ...taskList,
                {
                    id:taskList.length,
                    text: inputText,
                    completed: false,
                },
            ]);
            setInputText("");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputText(e.target.value);
    }

    return(
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type = "text" onChange={handleChange} value={inputText} />
                <button>
                    <i className = "fas fa-plus-square"></i>
                </button>
            </form>
        </div>
    );
};