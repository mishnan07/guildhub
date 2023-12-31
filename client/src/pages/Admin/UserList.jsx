import React, { useState } from 'react';
import Header from '../../components/admin/Header/Header';
import Sidebar from '../../components/admin/sidebars/Sidebar';
import HomeOwner from '../../components/admin/users/UsersList';

const HomeOwners = () => {
    const [userType,setUserType] = useState('owner')
    const handleUser =(user)=>{
          setUserType(user)
    }
return(
  <div>
    <Header />


    <div className='flex flex-col md:flex-row'>
      <Sidebar className='w-full md:w-1/4 lg:w-1/5' />
      <div className='w-full' >
        <div className='flex justify-evenly p-1 '>
            <button className='bg-lime-400 rounded p-1' onClick={()=>handleUser('owner')}>Home Owners</button>
            <button className='bg-yellow-400 rounded p-1' onClick={()=>handleUser('pro')}>Professionals</button>
        </div>
      <HomeOwner userType={userType}  className='w-full md:w-3/4 lg:w-4/5' />

      </div>
    </div>
  </div>
);
}
export default HomeOwners;
