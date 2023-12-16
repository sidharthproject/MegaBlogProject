import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header,Footer } from './Components'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {
const [loading,setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authservice.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(
    ()=>{setLoading(false)}
  )

},[]) 
  return  !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
     <Header/>
     <Outlet/>
     <Footer/>
      </div>
      <ToastContainer/>
    </div>
  ):null
}

export default App
