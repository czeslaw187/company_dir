import { useState, useEffect } from "react";
import AddDepartment from "../components/Department/AddDepartment";
import { fetchDepartments } from "../lib/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "../lib/userSlice";

function Departments() {
    const [input,setInput] = useState({})
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchDepartments())
        dispatch(fetchLocations())
    },[])

    const deps = useSelector(state=>state.users)
    console.log(deps,'deps')

    const onChange =(e)=> {
        const {name, value} = e.target
        setInput(values=>({
            ...values,
            [name]:value
        }))
    }

    return ( 
        <div>
            <AddDepartment onChange={onChange} input={input} deps={deps}/>
        </div>
     );
}

export default Departments;