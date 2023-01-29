import { useState, useEffect } from "react";
import AddLocation from "../components/Location/AddLocation";
import { fetchLocations } from "../lib/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteOneLocation } from "../lib/userSlice";
import Warning from "../components/Warning";

function Locations() {
    const [input,setInput] = useState({})
    const [isOpen,setIsOpen] = useState(false)
    const [locId,setLocId] = useState('')
    const onChange =(e)=> {
        const {name, value} = e.target
        setInput(values=>({
            ...values,
            [name]:value
        }))
    }
    
    const dispatch = useDispatch()
    const locations = useSelector(state=>state.users.locations)
    const users = useSelector(state=>state.users.users)
    const departments = useSelector(state=>state.users.departments)

    const handleDelete =(id)=> {
        setIsOpen(!isOpen)
        dispatch(deleteOneLocation(id))
        dispatch(fetchLocations())
    }
    
    useEffect(()=>{
        if (locations.length <= 0) {
            dispatch(fetchLocations())
        }
    },[])
    
    const toggle =()=> {
        setIsOpen(!isOpen)
    }
    
    const countDepartments =(deps)=> {
        let numb = 0
        for (let x in deps) {
            numb += 1
        }
        return numb
    } 
    
    return ( 
        <div>
            <AddLocation onChange={onChange} input={input} fetchLocations={fetchLocations} />
            <Warning warningText={'Are you sure you want to delete that location ?'} 
                     isOpen={isOpen} 
                     toggle={toggle} 
                     handleDelete={handleDelete} 
                     locId={locId} 
            />
            <div className="w-full h-fit">
                {locations && locations.map((el,id)=>{
                    let numOfEmps = users.filter(it=>{return it.location == el.name})
                    let numOfDeps = countDepartments(departments.filter(it=>{return it.locationid == el.id}))
                    return (
                        <div key={id} className="w-full h-[3rem] my-2 grid grid-flow-row grid-cols-4 justify-between items-center border-2 rounded-lg shadow-md">
                            <h1 className="text-lg ml-5 my-1">{el.name}</h1>
                            <h1 className="text-sm my-0 text-center">No Employees: {numOfEmps.length}</h1>
                            <h1 className="text-sm text-center">No Departments: {numOfDeps}</h1>
                            <div className="mr-3 transition duration-300 ease-in-out hover:scale-125 cursor-pointer text-center">
                                <button type="button" onClick={()=>{toggle(); toggleAlert(); setLocId(el.id)}}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default Locations;