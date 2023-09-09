import React, { useState } from 'react';
import ThreeDotButton from './ThreeDotButton';
import userAxios from '../../../Axios/userAxios';
import Report from './Report';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Options = ({ item, user ,deleate, value, Type}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reportOpen,setReportOpen] = useState(false)

  let token
 if( Type === 'users'){
    token = useSelector((state)=>state.proAuth.Token)
 }else if('professional')  {
    token = useSelector((state)=>state.proAuth.Token)
 }

  const showToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000
    });
  };

  const showErrorMessage = (emessage) => {
    toast.error(emessage, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000
    });
  };




  const open = (postId) => {
    setIsOpen(!isOpen);
  };

  const deletePost = async (item)=>{
    try {
        const response = await userAxios.post('/deletePost',{postId:item._id},
        {headers:  {Authorization: `Bearer ${token}` } , }     
        )
        console.log(response.data.message);
    } catch (error) {
        console.log('post not deleted');
    }
  }

  const save = async (postId)=>{
    try {
        const response = await userAxios.post('/savePost',{postId ,userId:user._id,Type},
        {headers:  {Authorization: `Bearer ${token}` } , }     
        )
        console.log(response.data.message,'ppppppppppp');
        if(response.data.isTrue===true){
            showToastMessage(response.data.message)
        }else{
            showErrorMessage(response.data.message)
        }
    } catch (error) {
        
    }
}


  return (
    <div className="">

      <div onClick={() => open(item._id)}>
        <ThreeDotButton />
        {reportOpen?
        <div className="w-fit h-fit absolute top-[-50%] right-[10%] md:top-[-50%] md:right-[50%]">
          <Report item={item} user={user} Type={Type} setReportOpen={setReportOpen}  />
          </div>
         :''}
      </div>

      {isOpen && (
        <div className="relative mr-3 ">
          {user._id === item.proId ? (
            <p className="absolute z-10 w-100 mt-0 h-100 text-gray-600"
            onClick={() =>{ deletePost(item); deleate(value)}}
            
            >delete</p>
          ) : (
            <>
              <p className="absolute z-10 w-100 mt-0 h-100 text-gray-600"
              onClick={()=>setReportOpen(!reportOpen)}
              >report</p>
              <p className="absolute z-10 w-100 mt-7 h-100 text-gray-600"
              onClick={()=>save(item._id)}
              >save</p>
            </>
          )}

        </div>
        
      )}
                          <ToastContainer /> {/* ToastContainer for showing success message */}

    </div>
  );
};

export default Options;
