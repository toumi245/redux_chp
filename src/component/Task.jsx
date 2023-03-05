import React from "react";
import Button from 'react-bootstrap/Button';
import { deleteTask,doneTask } from "../JS/actions/actions";
import { useDispatch } from "react-redux";
import Edit from "./EditTask";
const Task=({task})=>{
const dispatch=useDispatch();
    return(
     <div style={{margin:"5px 10px 0 0",borderBottom:"1px solid black",padding:"5px", display:"flex",justifyContent:"space-between"}}>
        <span className={task.isDone? "null":"done"}>{task.text}</span>
        <Edit  task={task}/>
        <Button  variant="danger" onClick={()=>dispatch(deleteTask(task.id))}  >delete</Button>
        <Button   onClick={()=>dispatch(doneTask(task.id))}>{task.isDone ?"Done":"unDone" } </Button>
     
     </div>
    )
}
export default Task