import {App} from '../App'

export const Modal = ({show,setShow} : {show:boolean, setShow:React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    const closeModal = () =>{
        setShow(false);
    }
    
    if(show){
        return(
            <div className = "overlay">
                <div className="content">
                    <p></p>
                    <p><button className="closeButton" onClick={() => closeModal()}>close</button></p>
                </div>
            </div>
        )
    }else {
        return null;
    }

}

