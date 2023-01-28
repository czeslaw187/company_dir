import { useState, useEffect } from "react";
import AddDepartment from "../components/Department/AddDepartment";
import { fetchDepartments } from "../lib/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Warning from "../components/Warning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteOneDepartment } from "../lib/userSlice";

function Departments() {
    const [input,setInput] = useState({})
    const [isOpen,setIsOpen] = useState(false)
    const [locId, setLocId] = useState('')
    const dispatch = useDispatch()

    const handleDelete =(id)=> {
        setIsOpen(!isOpen)
        dispatch(deleteOneDepartment(id))
        dispatch(fetchDepartments())
    }

    const deps = useSelector(state=>state.users)

    useEffect(()=>{
        if (deps.departments.length <= 0) {
            dispatch(fetchDepartments())
        }
    },[])

    const toggle =()=> {
        setIsOpen(!isOpen)
    }

    const onChange =(e)=> {
        const {name, value} = e.target
        setInput(values=>({
            ...values,
            [name]:value
        }))
    }
    console.log(deps.departments, deps.users,'deps')
    return ( 
        <div>
            <AddDepartment onChange={onChange} input={input} deps={deps}/>

            <Warning warningText={'Are you sure you want to delete that department ?'} isOpen={isOpen} toggle={toggle} handleDelete={handleDelete} locId={locId}/>

            <div className="w-full h-fit">
                {deps.departments && deps.departments.map((el,id)=>{
                    let numOfEmps = deps.users.filter(it=>{return it.department == el.title})
                    return (
                        <div key={id} className="w-full h-[3rem] m-2 grid grid-flow-row grid-cols-4 justify-between items-center border-2 rounded-lg shadow-md">
                            <h1 className="text-xl ml-5 my-0">{el.title}</h1>
                            <h1 className="text-sm my-0 text-center">Number of employees: {numOfEmps.length}</h1>
                            <h1 className="text-sm ml-5 my-0 text-justify">Location: {el.location}</h1>
                            <div className="transition duration-300 ease-in hover:scale-125 cursor-pointer text-center mr-5">
                                <button type="button" onClick={()=>{toggle(); setLocId(el.depid)}}>
                                    <FontAwesomeIcon key={id} icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default Departments;