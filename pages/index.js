import { Inter } from '@next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllUsers } from '../lib/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import AddEmployee from '../components/Employee/AddEmployee'
import Warning from '../components/Warning'
import { deleteOneEmployee } from '../lib/userSlice'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_URL,'url')
  const dispatch = useDispatch()
  const [input,setInput] = useState('')
  const [isOpen,setIsOpen] = useState(false)
  const [locId, setLocId] = useState('')

  const users = useSelector(state=>state.users)

  const handleDelete =(id)=> {
    setIsOpen(!isOpen)
    dispatch(deleteOneEmployee(id))
  }

  const onChange =(e)=> {
    const {name, value} = e.target
    setInput(values=>({...values, [name]:value}))
  }

  useEffect(()=>{
    if (users.users.length <= 0) {
      dispatch(fetchAllUsers())
    }
  },[])

  const toggle =()=> {
    setIsOpen(!isOpen)
  }
  
  return (
    <div>
      <AddEmployee onChange={onChange} input={input} users={users}/>

      <Warning warningText={'Are you sure you want to delete that employee ?'} isOpen={isOpen} handleDelete={handleDelete} toggle={toggle} locId={locId}/>

      <div className="w-full h-fit">
                {users.users && users.users.map((el,id)=>{
                    return (
                        <div key={id} className="w-full h-[3rem] m-2 grid grid-flow-row grid-cols-5 justify-between items-center border-2 rounded-lg shadow-md">
                            <h1 className="text-lg ml-5 my-0">{el.user}</h1>
                            <h1 className="text-sm ml-5 my-0">{el.email}</h1>
                            <h1 className="text-sm ml-5 my-0">{el.department}</h1>
                            <h1 className="text-sm ml-5 my-0">Location: {el.location}</h1>
                            <div className="transition duration-300 ease-in hover:scale-125 cursor-pointer text-center mr-5">
                                <button type="button" onClick={()=>{toggle(); setLocId(el.userid)}}>
                                    <FontAwesomeIcon key={id} icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}
