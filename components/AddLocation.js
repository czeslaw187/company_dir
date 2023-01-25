import { useState } from "react";
import { useForm } from "react-hook-form";

function AddLocation({onChange, input}) {
    const [drop,setDrop] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        defaultValues: {
            location:''
        }
    })

    const onSubmit =()=> {
        console.log(input)
        reset()
    }
    return ( 
        <div>
            <div className="flex flex-col text-black">
            <button type="button" 
                    className='w-[8rem] h-[4rem] my-5 shadow-xl rounded-sm mx-auto text-slate-500 bg-amber-200 hover:bg-amber-400 active:shadow-black active:shadow-inner'
                    onClick={()=>{setDrop(!drop)}}>
                    Add Location
                </button>
            <div className={drop ? 'w-5/12 h-fit bg-amber-50 mx-auto animate-dropdown rounded-md flex flex-col shadow-md' : 'hidden'}>
                
                <button type="button" 
                    onClick={()=>{setDrop(!drop)}}
                    className='ml-auto mr-3 mt-3 text-black font-bold hover:scale-125 transition duration-500 ease-in-out'>
                        X
                </button>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-5">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" {...register('location',{required: true})} onChange={onChange}/>
                    {errors.location && errors.location.type === 'required' && (
                        <p className="text-red-500 text-lg">Enter location</p>
                    )}
                    <button  type="submit" className="w-[7rem] h-[3rem] mb-2 rounded-md bg-amber-200 hover:bg-amber-300 mx-auto mt-5 shadow-lg active:shadow-black active:shadow-inner">Add Location</button>
                </form>
            </div>
            </div>
        </div>
     );
}

export default AddLocation;