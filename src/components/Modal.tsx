import {App} from '../App'
import { useTodoValue } from '../context';

export const Modal = ({show,setShow} : {show:boolean, setShow:React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    const closeModal = () =>{
        setShow(false);
    }
    const hoge = useTodoValue();
    
    if(show){
        return(
            <div className = "overlay">
                <div className="content">
                    <p>{hoge}</p>
                    <p><button className="closeButton" onClick={() => closeModal()}>close</button></p>
                </div>
            </div>
        )
    }else {
        return null;
    }

}

