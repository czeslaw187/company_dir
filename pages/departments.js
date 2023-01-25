import { useState } from "react";
import AddDepartment from "../components/AddDepartment";

function Departments() {
    const [input,setInput] = useState({})
    const onChange =(e)=> {
        const {name, value} = e.target
        setInput(values=>({
            ...values,
            [name]:value
        }))
    }

    return ( 
        <div>
            <AddDepartment onChange={onChange} input={input}/>
        </div>
     );
}

export default Departments;