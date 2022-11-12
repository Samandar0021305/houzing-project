import React from 'react'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import navbar from '../utils/navbar'

 const Root = () => {
  return (
    <BrowserRouter>
     <Routes>
  
       <Route element={<Navbar />}>
       {
         navbar.map(value =>{
           return <Route key={value.id}  path={value.path}  element={value.element} />
          })
        }
        </Route> 
       <Route path='/' element={<Navigate to={'/home'} />} />
       <Route path='*' element={<h1>404 NOR FOUND</h1>}  />
     </Routes>
    </BrowserRouter>
  )
}

export default Root
