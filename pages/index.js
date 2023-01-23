import { Inter } from '@next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../lib/userSlice'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(setUser({name:'Grzegorz'}))
  },[])

  const user = useSelector(state=>state.users.users)

  console.log(user,'user')
  return (
    <div>
      <h1>My page</h1>
    </div>
  )
}
