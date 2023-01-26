import { useForm } from "react-hook-form";
import { useState } from "react";
import { addNewDepartment } from "../../lib/userSlice";
import { useDispatch } from "react-redux";
import { fetchDepartments } from "../../lib/userSlice";

function AddDepartment({onChange, input, deps}) {
    const [drop,setDrop] = useState(false)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        defaultValues:{
            'location':''
        }
    })
    
    const onSubmit =()=> {
        console.log(input)
        dispatch(addNewDepartment(input.title, input.location))
        reset()
        dispatch(fetchDepartments())
    }

    const locations = deps.locations

    return ( 
        <div>
            <div className="flex flex-col text-black">
            <button type="button" 
                className='w-[8rem] h-[4rem] my-5 shadow-xl rounded-sm mx-auto text-slate-500 bg-amber-200 hover:bg-amber-400 active:shadow-black active:shadow-inner'
                onClick={()=>{setDrop(!drop)}}>
                  Add Department
            </button>

            <div className={drop ? 'w-5/12 h-fit bg-amber-50 mx-auto animate-dropdown rounded-md flex flex-col shadow-md' : 'hidden'}>
                <button type="button" 
                    onClick={()=>{setDrop(!drop)}}
                    className='ml-auto mr-3 mt-3 text-black font-bold hover:scale-125 transition duration-500 ease-in-out'>
                        X
                </button>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-5">
                    <label>Title</label>
                    <input type="text" name="title" {...register('title',{required: true})} onChange={onChange} />
                    {errors.title && errors.title.type === 'required' && (
                        <p className="text-red-500">Department name required</p>
                    )}
                    <label>Location</label>
                    <select {...register('location',{required:true})} onChange={onChange}>
                        {
                            locations && locations.map((el,id)=>{
                                return <option key={id} value={el.id}>{el.name}</option>
                            })
                        }
                    </select>
                    {errors.location && errors.location.type === "required" && (
                        <p className="text-red-500 text-lg">Location required</p>
                    )}
                    <button  type="submit" className="'w-[7rem] h-[3rem] mb-2 rounded-md bg-amber-200 hover:bg-amber-300 mx-auto mt-5 shadow-lg active:shadow-black active:shadow-inner'">Add Department</button>
                </form>
            </div>
        </div>
        </div>
     );
}

export default AddDepartment;