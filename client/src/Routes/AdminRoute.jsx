import React from 'react'
import { Route,Routes } from 'react-router-dom'

import AddCategory from '../components/admin/category/AddCategory'
import Signin from '../components/admin/login/Signin'
import Home from '../pages/Admin/Home'
import Category from '../pages/Admin/Category'
import HomeOwners from '../pages/Admin/UserList'
import ReportedPost from '../pages/Admin/ReportedPost'

const AdminRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/addCategory' element={<AddCategory />}   />
            <Route path='/login' element={<Signin />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/category' element={<Category />}/>
            <Route path='/homeOwners' element={<HomeOwners />}/>
            <Route path='/reportedPost' element={<ReportedPost />}/>
        </Routes>
       
      
    </div>
  )
}

export default AdminRoute
