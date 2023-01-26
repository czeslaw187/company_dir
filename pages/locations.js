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
    
    useEffect(()=>{
        dispatch(fetchLocations())
    },[])
    
    const toggle =()=> {
        setIsOpen(!isOpen)
    }
    
    
    const handleDelete =(id)=> {
        setIsOpen(!isOpen)
        dispatch(deleteOneLocation(id))
        dispatch(fetchLocations)
    }
    const locations = useSelector(state=>state.users.locations)
    const users = useSelector(state=>state.users.users)
    console.log(users,'locations')

    return ( 
        <div>
            <AddLocation onChange={onChange} input={input} fetchLocations={fetchLocations} />

            <Warning warningText={'Are you sure you want to delete that location ?'} isOpen={isOpen} toggle={toggle} handleDelete={handleDelete} locId={locId}/>

            <div className="w-full h-fit">
                {locations && locations.map((el,id)=>{
                    return (
                        <>
                        <div key={id} className="w-full h-[3rem] my-2 flex flex-row justify-between items-center border-2 rounded-lg shadow-md">
                            <h1 key={id} className="text-lg ml-5 my-1">{el.name}</h1>
                            <h1 className="text-lg">Number of employees: </h1>
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

export default Locations;