import React, { useEffect, useState } from "react";
import userAxios from "../../../Axios/userAxios";
import { userAPI } from "../../../Constants/Api";
import './Profile.css'
import Options from "../../clients/MiddleContent/Options";
import RequirementShow from "../../clients/requirement/RequirementShow";


const Profile = ({Type,user,token}) => {
    const [post, setPost] = useState([]);
    const [pros, setPros] = useState([]);
    const [users,setUsers] = useState([]);
    const [state, setState] = useState(false);
    const [posted,setPosted] = useState([])
    const [main,setMain] = useState([])
    const [saved,setSaved] = useState([])
    const [deleatedId, setDeleatedId] = useState('');
    const [show,setShow] = useState(false)

    // const [selection,setSelection] =useState([])

   const postImage = '/images/model-house-project-blueprints.jpg'

   
  const deleatTheComponent = (value) => {
    setDeleatedId(value)
 }

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await userAxios.get("/getPost",
                            {headers: { Authorization: `Bearer ${token}` }});
            const updatedPosts = response.data.post.map((post) => ({
              ...post,
              liked: false,
            }));

            console.log(updatedPosts,'lllllllllllllll');

            setPost(updatedPosts);
            setPros(response.data.pros);
            setUsers(response.data.users)         
            
          } catch (error) {
            console.log("Error fetching posts:", error);
          }
        };
    
        fetchPosts();
      }, [state]);

      const proId = user?user._id:''
      const saveds = user?user.savedPost:''
      const posteds =  post.filter(item => !item.isBanned &&item.isActive && item.proId === user._id);
      const savedPost = post.filter(obj1 =>
        saveds.some(obj2 => obj2.postId === obj1._id && obj1.isBanned === false)
      );
      console.log(savedPost,'ppoopp');

    //   setMain(posteds)
    //   setPosted(posteds)
    //  setSaved(savedPost)


      const handleShowPosts = () => {
        setShow(false)
        setMain(posteds);
      };
    
      const handleShowSaved = () => {
        setShow(false)
        setMain(savedPost);
      };
      
  return (
    <>
    
  
    
    <main className="bg-gray-100 bg-opacity-25">
    
      <div className="lg:w-8/12 lg:mx-auto mb-8">
    
        <header className="flex flex-wrap items-center p-4 md:py-8">
    
          <div className="md:w-3/12 md:ml-16">
          
            <img className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                         border-2 border-pink-600 p-1" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile"/>
          </div>
    
      
          <div className="w-8/12 md:w-7/12 ml-4">
            <div className="md:flex md:flex-wrap md:items-center mb-4">
              <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0 text-cyan-500">
                {user?user.name:''}
              </h2>
    
          
              <span className="inline-block fas fa-certificate fa-lg text-blue-500 
                                   relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
                <i className="fas fa-check text-white text-xs absolute inset-x-0
                                   ml-1 mt-px"></i>
              </span>
    
       
              <a href="#" className="bg-blue-500 px-2 py-1 
                            text-white font-semibold text-sm rounded  text-center 
                            sm:inline-block block">Edite</a>
            </div>
    
       
            <ul className="hidden md:flex space-x-8 mb-4">
              <li>
                <span className="font-semibold mr-1">{post?post.filter((item)=> item.proId === user._id).length:'0'}</span>
                posts
              </li>
    
              <li>
                <span className="font-semibold mr-1">{user?user.following.length:''}</span>
                followers
              </li>
              <li>
                <span className="font-semibold mr-1">{user?user.follow.length:''}</span>
                following
              </li>
            </ul>
    
     
            <div className="hidden md:block">
           
              <h1 className="font-semibold">{user?user.category:''}</h1>
              {Type === 'professional'?
              <p className="">{user?user.experiance:''} year of experiance</p> 
             :
              <p>HomeOwner</p>
             }
              <span>{user?user.location:''}</span>
              <p>{user?user.phone:''}</p>
            </div>
    
          </div>
    
       
          <div className="md:hidden text-sm my-2">
          <h1 className="font-semibold">{user?user.category:''}</h1>
              <p className="">{user?user.experiance:''} year of experiance</p> 
             
              <span>{user?user.location:''}</span>
              <p>{user?user.phone:''}</p>
          </div>
    
        </header>
    
    

<div className="flex items-center justify-center  py-4 md:py-8 flex-wrap">
    <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
      onClick={handleShowPosts}>Posts</button>
      {Type === 'professional' ?
      <>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800" 
    onClick={()=>setShow(true)}>Hires</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Answeres</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Reviews</button>
    </>
   :''}
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
      onClick={handleShowSaved}>Saved</button>
</div>
{!show?
<div className="grid grid-cols-1 sm:grid-cols-2 max-h-3 md:grid-cols-3 gap-4">
  {main.map((item)=>(
    
    <div key={item._id}>
       {/* <div className="px-3 " >
              <Options item={item} user={user} deleate={deleatTheComponent} value={item._id} Type={Type} />

              </div> */}
    {item.image[0] ?(
    <div>
        <img className="sm:h-60 md:h-80 w-full h-full sm:max-w-[1/2] rounded-lg"  src={`${userAPI}/images/` + item.image[0]} alt=""/>
    </div>
    ):(
      <div className="bg-slate-900">
      <video className="sm:h-60 md:h-80 w-full h-full sm:max-w-[1/2] rounded-lg " controls src={`${userAPI}/images/` + item.video[0]}  type="video/mp4" alt=""/>
    </div>

    )}

    
    
    </div>
    ))}
</div>
:
<div className="">
<RequirementShow profileId={proId}/>

</div>
}

      </div>
    </main>
        </>
  )
}

export default Profile
