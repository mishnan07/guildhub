import React, { useEffect, useState } from 'react'
import userAxios from '../../../Axios/userAxios'
import { useSelector } from "react-redux";


const Follow = ({users,pros,Type,user}) => {
    console.log(users,'users',pros,'props',Type,'types',user,'user')
    const [userDetail,setUserDetial] =useState([])
    const [suce,setSuc] =useState(1)
    const [seto,setSeto] = useState(false)

       
let token
if( Type === 'users'){
   token = useSelector((state)=>state.proAuth.Token)
}else if('professional')  {
   token = useSelector((state)=>state.proAuth.Token)
}
   
    const client = users?users:''
    const pro = pros?pros:''
    const userType = Type?Type:''
    const userr = user?user:''
    const userId = user?user._id:''
    console.log(userId,'bb');

    useEffect(() => {
        setUserDetial([userr]);
    }, [userr,seto]);

   const following =async (followerId,followerType,setSeto)=>{
      setSeto(!seto)
      console.log(seto,'setooooo');
        try {
            const response = await userAxios.post('/following',
            {userId,userType,followerId,followerType},
            {headers: { Authorization: `Bearer ${token}` },}
            )
            
            if(response.data.message ==  'Follower added/removed successfully'){
               setSuc(suce+1)
            console.log('koooooooooooooooo');
            }
           
            console.log(response.data.message);
        } catch (error) {
            console.log('error occure when following');
        }
   }

   const isFollowed = (isFollowedId) => {
    const existingFollowIndex = userDetail[0]?.follow.findIndex(
      (follower) =>
        follower.followersId && follower.followersId.toString() === isFollowedId
    );

    return existingFollowIndex !== -1 ? 'unfollow' : 'follow';
  };

  const isFollowed1 = (isFollowedId) => {
    const existingFollowIndex = pro[0]?.follow.findIndex(
      (follower) =>
        follower.followersId && follower.followersId.toString() === isFollowedId
    );

    return existingFollowIndex !== -1 ? 'unfollow' : 'follow';
  };



   console.log(userr,'uuuuuu');
  return (
    <div>
        


    
<div id="dropdownUsers" className="z-10 mt-10   bg-white rounded-lg shadow   w-full  h-full dark:bg-white-700 ">
  <ul className="h-full py-2 overflow-y-auto text-black-700 dark:text-black-200 ml-4 " aria-labelledby="dropdownUsersButton">
    {pro.map((item)=>(
      <>
      {isFollowed(item._id) === 'follow'?
    <li className=' hover:bg-gray-100'>
    <div className="follow-user flex items-center space-x-4">
          <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm w-12 h-12 rounded-full" />
          <div>
            <h5><a href="#" className="text-blue-500">{item.name}</a></h5>
            <p href="#" className="text-yellow-400 text-xs">{item.category}</p>
        
            <a href="#" className="text-green-500" onClick={()=>following(item._id,'professional', setSeto)}>
                
            {item._id ? isFollowed(item._id) : 'follow'}            </a>
          </div>
        </div>
    </li>
    :""}
    </>  
   ))}
   
  </ul>

  <ul className="h-full py-2 overflow-y-auto text-black-700 dark:text-black-200 ml-4" aria-labelledby="dropdownUsersButton">
    {client.map((item)=>(
        <>
        {isFollowed(item._id) === 'follow'?
    <li className=' hover:bg-gray-100'>
    <div className="follow-user flex items-center space-x-4">
          <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm w-12 h-12 rounded-full" />
          <div>
            <h5><a href="timeline.html" className="text-blue-500">{item.name}</a></h5>
            <p href="#" className="text-yellow-400 text-xs">HOME OWNER</p>
            <a href="#" className="text-green-500"  onClick={()=>following(item._id,'users',setSeto)}>
            {item._id ? isFollowed1(item._id) : 'follow'}  
            </a>
          </div>
        </div>
        
    </li>
     :""}
     </>  
   ))}
   
  </ul>
 
</div>

      
    </div>
  )
}

export default Follow
