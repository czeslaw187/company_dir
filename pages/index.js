import { Inter } from '@next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../lib/userSlice'
import { useEffect, useState } from 'react'

import AddEmployee from '../components/Employee/AddEmployee'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch()
  const [input,setInput] = useState('')
  
  // useEffect(()=>{
  //   dispatch()
  // },[])

  const onChange =(e)=> {
    const {name, value} = e.target
    setInput(values=>({...values, [name]:value}))
  }
  
  const user = useSelector(state=>state.users.users)
  
  return (
    <div>
      <AddEmployee onChange={onChange} input={input}/>
    </div>
  )
}
