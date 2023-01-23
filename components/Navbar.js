import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [drop,setDrop] = useState(false)
    return ( 
        <div className="w-full h-[5rem] border-2 rounded-t-md border-slate-300 bg-gradient-to-br from-slate-200 to-slate-100 flex flex-row justify-between items-center">
            <a className="text-slate-500 text-xl" href="#">Company Directory</a>
            <div>
                <button 
                type="button" 
                className="mx-5"
                onClick={()=>{setDrop(!drop)}}>
                    <FontAwesomeIcon icon={faBars} size="2xl" color="black"/>
                </button>
                <ul className={drop ? "flex flex-col absolute text-sm md:text-lg right-[2rem] top-[4rem] h-[12rem] animate-dropdown bg-slate-100" : "hidden"}>
                    <li className="mx-3 text-slate-500 font-bold hover:opacity-60">
                        <button type="button">Employees</button>
                    </li>
                    <li className="mx-3 text-slate-500 font-bold hover:opacity-60">
                        <button type="button">Department</button>
                    </li>
                    <li className="mx-3 text-slate-500 font-bold hover:opacity-60">
                        <button type="button">Location</button>
                    </li>
                </ul>
            </div>      
        </div>
     );
}

export default Navbar;