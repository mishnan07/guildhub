import React, { useEffect, useState } from 'react'
import proAxios from '../../../Axios/proAxios'
import { userAPI } from "../../../Constants/Api";


const CategoeyTable = () => {
    const [allCategory,setAllCAtegory] = useState([])

    useEffect(()=>{
        proAxios.get('/getCategory')
        .then((res)=>{
          const getCategory = res.data.category
          console.log(getCategory,'lll++==');
          setAllCAtegory(getCategory)
        })
      },[])

  return (
    <div className='w-full' >
         <div className=" overflow-auto w-full ">

<table className="w-full mt-5">
<thead className="bg-gray-800 text-white">
        <tr>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">si no</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">category name</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">edit</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">delete</th>
        </tr>
    </thead>
     <tbody className="text-gray-700">
     {allCategory.map((item,index)=>(
           <tr>
  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">{index+1}</th>
  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">{item.categoryName}</th>
  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Edit</th>
  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">delete</th>
  </tr>      ))}
        
          </tbody>
 </table>
</div>
    </div>
  )
}

export default CategoeyTable
