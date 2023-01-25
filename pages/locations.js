import { useState } from "react";
import AddLocation from "../components/Location/AddLocation";

function Locations() {
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
            <AddLocation onChange={onChange} input={input}/>
        </div>
     );
}

export default Locations;