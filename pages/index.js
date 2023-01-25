import { Inter } from '@next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../lib/userSlice'
import { useEffect, useState } from 'react'

import AddEmployee from '../components/AddEmployee'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch()
  const [input,setInput] = useState('')
  
  useEffect(()=>{
    dispatch(setUser({name:'Grzegorz'}))
  },[])

  const onChange =(e)=> {
    const {name, value} = e.target
    setInput(values=>({...values, [name]:value}))
  }
  const onSubmit =()=> {
    console.log(input)
  }
  const user = useSelector(state=>state.users.users)
  
  return (
    <div>
      <AddEmployee onChange={onChange} onSubmit={onSubmit}/>
    </div>
  )
}
