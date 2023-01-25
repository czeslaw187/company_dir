import { useState } from "react";
import { useForm } from 'react-hook-form'

function AddEmployee({onChange, input}) {
    const [drop,setDrop] = useState(false)
    const departments = []
    const locations = []
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
      } = useForm({
        defaultValues: {
          'department': '',
          'location': ''
        }
      })
    const onSubmit =()=> {
        console.log(input)
        reset()
    }     
    return ( 
        <div>
            <div className='flex flex-col text-black'>
                <button type="button" 
                        className='w-[8rem] h-[4rem] my-5 shadow-xl rounded-sm mx-auto text-slate-500 bg-amber-200 hover:bg-amber-400 active:shadow-black active:shadow-inner'
                        onClick={()=>{setDrop(!drop)}}>
                        Add Employee
                </button>
                
                <div className={drop ? 'w-5/12 h-fit bg-amber-50 mx-auto animate-dropdown rounded-md flex flex-col' : 'hidden'}>
                <button type="button" 
                        onClick={()=>{setDrop(!drop)}}
                        className='ml-auto mr-3 mt-3 text-black font-bold hover:scale-125 transition duration-500 ease-in-out'>
                            X
                </button>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-5'>
                    <label>Frist Name</label>
                    <input type="text" name="firstName" {...register('firstName',{required: true})} onChange={onChange}/>
                    {errors.firstName && errors.firstName.type === 'required' && (
                    <p className='text-red-500 text-md font-bold'>First Name required</p>
                    )}
                    <label>Last Name</label>
                    <input type="text" name="lastName" {...register('lastName',{required: true})} onChange={onChange}/>
                    {errors.lastName && errors.lastName.type === 'required' && (
                    <p className='text-red-500 text-md font-bold'>Last Name required</p>
                    )}
                    <label>Email</label>
                    <input type="email" name="email" {...register('email',{required: true})} onChange={onChange}/>
                    {errors.email && errors.email.type === 'required' && (
                    <p className='text-red-500 text-md font-bold'>Email required</p>
                    )}
                    <label>Department</label>
                    <select name='department' {...register('department', {required: true})} onChange={onChange}>
                    {
                        departments && departments.map((el,id)=>{
                        return <option key={id} value={el}>{el}</option>
                        })
                    }           
                    </select>
                    {errors.department && errors.department.type === 'required' && (
                        <p className='text-red-500 text-md font-bold'>Department required</p>
                    )}   
                    <label>Location</label>
                    <select name='location' {...register('location',{required: true})} onChange={onChange}>
                    {
                        locations && locations.map((el,id)=>{
                        return <option key={id} value={el}>{el}</option>
                        })
                    }              
                    </select>
                    {errors.department && errors.department.type === 'required' && (
                        <p className='text-red-500 text-md font-bold'>Location required</p>
                    )}
                    <button type="submit" className='w-[7rem] h-[3rem] mb-2 rounded-md bg-amber-200 hover:bg-amber-300 mx-auto mt-5 shadow-lg active:shadow-black active:shadow-inner'>Add Person</button>
                </form>
                </div>
            </div>
        </div>
     );
}

export default AddEmployee;