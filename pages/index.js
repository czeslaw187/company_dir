import { Inter } from '@next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllUsers } from '../lib/userSlice'

import AddEmployee from '../components/Employee/AddEmployee'
import Warning from '../components/Warning'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch()
  const [input,setInput] = useState('')
  const [isOpen,setIsOpen] = useState(false)
  const [locId, setLocId] = useState('')

  const onChange =(e)=> {
    const {name, value} = e.target
    setInput(values=>({...values, [name]:value}))
  }

  useEffect(()=>{
    dispatch(fetchAllUsers())
  },[])

  const toggle =()=> {
    setIsOpen(!isOpen)
}
  
  const users = useSelector(state=>state.users)
  
  return (
    <div>
      <AddEmployee onChange={onChange} input={input} users={users}/>

      <Warning warningText={'Are you sure you want to delete that employee ?'} isOpen={isOpen} toggle={toggle} locId={locId}/>

    </div>
  )
}
