import { useState } from "react";

function Locations() {
    const [drop,setDrop] = useState(false)
    
    return ( 
        <div className="flex flex-col text-black">
            <button type="button" 
                className='w-[8rem] h-[4rem] my-5 shadow-xl rounded-sm mx-auto text-slate-500 bg-amber-200 hover:bg-amber-400 active:shadow-black active:shadow-inner'
                onClick={()=>{setDrop(!drop)}}>
                  Add Location
            </button>

            <div className={drop ? 'w-5/12 h-[32rem] bg-amber-50 mx-auto animate-dropdown rounded-md flex flex-col' : 'hidden'}>
                
            </div>
        </div>
     );
}

export default Locations;