import { useState, useEffect } from "react";
import AddDepartment from "../components/Department/AddDepartment";
import { fetchDepartments } from "../lib/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "../lib/userSlice";
import Warning from "../components/Warning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Departments() {
    const [input,setInput] = useState({})
    const [isOpen,setIsOpen] = useState(false)
    const [locId, setLocId] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchDepartments())
        dispatch(fetchLocations())
    },[])

    const toggle =()=> {
        setIsOpen(!isOpen)
    }

    const handleDelete =(id)=> {
        setIsOpen(!isOpen)
        dispatch(deleteOneLocation(id))
        dispatch(fetchDepartments())
    }

    const deps = useSelector(state=>state.users)
    console.log(deps.departments,'deps')

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

            <Warning warningText={'Are you sure you want to delete that department ?'} isOpen={isOpen} toggle={toggle} handleDelete={handleDelete} locId={locId}/>

            <div className="w-full h-fit">
                {deps.departments && deps.departments.map((el,id)=>{
                    return (
                        <>
                        <div key={id} className="w-full h-[3rem] my-2 flex flex-row justify-between items-baseline border-2 rounded-lg shadow-md">
                            <h1 key={id} className="text-lg ml-5 my-1">{el.title}</h1>
                            <h1 className="text-sm">Number of employees: </h1>
                            <h1 className="text-sm">Location: {el.location}</h1>
                            <div className="mr-3 transition duration-500 ease-in-out hover:scale-150 cursor-pointer">
                                <button type="button" onClick={()=>{toggle(); setLocId(el.id)}}>
                                    <FontAwesomeIcon key={id} icon={faTrash} />
                                </button>
                            </div>
                        </div>
                        
                        </>
                    )
                })}
            </div>
        </div>
     );
}

export default Departments;