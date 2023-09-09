import { token } from "morgan";
import { generateAuthToken } from "../middleware/auth.js";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import proModel from "../models/proModel.js";
import postModel from '../models/postModel.js'
import postCommentModel from "../models/postComment.js";
import { json } from "express";

import jwt from "jsonwebtoken";
import QuestionModel from "../models/questionModel.js";
import questionCommentModel from "../models/questionComment.js";



// professional details
export const userDetails = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, 'jdshhhkhdf8392jdcjdkkjfh');
    let user
  
        user = await proModel.findById(decodedToken.payload._id);

 
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json({ user });
  } catch (error) {
    console.error(error); 
    res.status(401).json({ message: "Authentication failed", error: error.message });
  }
};

//user  details
export const ClientDetails = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decodedToken = jwt.verify(token, 'jdshhhkhdf8392jdcjdkkjfh');
      let user
          user = await userModel.findById(decodedToken.payload._id);
      
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json({ user });
    } catch (error) {
      console.error(error); 
      res.status(401).json({ message: "Authentication failed", error: error.message });
    }
  };


export const Register = async(req,res)=>{
    try {
        let userDetails = req.body;
        const user = await userModel.find({email:userDetails.email})
        
       
        if(user.length === 0){
            userDetails.password = await bcrypt.hash(userDetails.password,10)
            await userModel.create({
                name:userDetails.name,
                email:userDetails.email,
                phone:userDetails.phone,
                password:userDetails.password,
                location:userDetails.location
            }).then((data)=>{
                console.log(data);
            }).catch((error)=>{
                console.log(error);
            })
            res.status(200).json({status:true,result:userDetails})
        }else{
            return res.json({mes:'user already exist'})
            // return res.json({error:true})
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}



export const Login = async (req, res) => {
    let userSignUp = {
        status: false,
        message: null,
        token:null,
        name:null
    }
    try {
        const userDetails = req.body;
        const findUser = await userModel.findOne({ email: userDetails.email });
console.log(findUser,'lllllllllllllll==========================================');
        if (findUser ) {
            if(findUser.isBanned === true){
                userSignUp.status = false
                userSignUp.message = "you are blocked";
                return res.json({userSignUp}); 
            }
            const matchUser = await bcrypt.compare(userDetails.password, findUser.password);

            if (matchUser) { 
                const token = generateAuthToken(findUser)
                const name = findUser.name
                userSignUp.status = true;
                userSignUp.token = token;
                userSignUp.name = findUser.name;       
                userSignUp.message = "sucessfully logged";

                const obj = {
                    token,
                    name
                }
                res.cookie('jwt',obj,{
                    httpOnly:false,
                    maxAge:600 * 1000
                })
                console.log('kkkki');
                return res.status(200).send({ userSignUp }); 
            } else {
                userSignUp.status = false
                userSignUp.message = "Password does not match";
                return res.json({userSignUp}); 
            }

        } else {
            userSignUp.status = false
            userSignUp.message = "User not found";
            return res.status(404).send({ userSignUp }); 
        }
    } catch (error) {
        res.status(500).json({ status: 'failed', message: error.message }); 
    }
};



export const GoogleLogin=async (req,res,next)=>{
    let userSignUp ={
        status:false,
        token:null,
        message:null
    }
     try {
        console.log(req.body.email);
        const email = req.body.email
        const findUser = await userModel.findOne({email:email})
        if(findUser){
            const token = generateAuthToken(findUser)
            userSignUp.status=true
            userSignUp.token=token
            userSignUp.message='successfully logged'
            return res.status(200).json({userSignUp})

        }else{
            userSignUp.message='no user found'
            return res.json(userSignUp)
        }
     } catch (error) {
        res.status(500).json({status:'failed',message:'no user found'})
     }
}


export const Home = async (req,res,next)=>{
    try {
        const user = 'social media'
        res.status(200).json(user)
        
    } catch (error) {
        res.json({status:'failed',message:error.message})
    }
}


export const GetPost = async (req,res)=>{
    try {
        console.log('Fetching image URL...');
    const randomImage = await postModel.findOne() 
    const post = await postModel.find({}).sort({_id:-1})
    console.log(post);
    const pros = await proModel.find({})
    const comments = await postCommentModel.find({}).sort({_id:-1})
    const users = await userModel.find({})

    if (randomImage && randomImage.image) {
      res.json({ imageUrl: randomImage.image[0],message:randomImage.message,
                   randomImage,post,pros,comments,users });
    } else {
      console.log('Image not found');
      res.status(404).json({ message: 'Image not found' });
    }
        
    } catch (error) {
        res.status(500).json({message:'error fetching image url',error:error.message})
    }
}

export const Like = async (req, res) => {
    try {
      const postId = req.body.postId;
      const userId = req.body.userId;
      const post = await postModel.findOne({ _id: postId });
      
  
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      const existingLikeIndex = post.likes.findIndex(
        (like) => like.userId && like.userId.toString() === userId
      );
      
  
      if (existingLikeIndex !== -1) {
        const existingLike = post.likes[existingLikeIndex];
        if (existingLike.liked) {
          existingLike.liked = false;
          post.likes.pull(existingLike._id);
         
        } else {
          existingLike.liked = true;
        }
      } else {
        post.likes.push({ userId, liked: true });
      }
  
      await postModel.updateOne({ _id: postId }, post);
  
      return res.status(200).json({ message: "Like status updated successfully", post });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };


  export const likeQuestion = async (req, res) => {
    try {
      const postId = req.body.postId;
      const userId = req.body.userId;
      const post = await QuestionModel.findOne({ _id: postId });
      
  
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      const existingLikeIndex = post.likes.findIndex(
        (like) => like.userId && like.userId.toString() === userId
      );
      
  
      if (existingLikeIndex !== -1) {
        const existingLike = post.likes[existingLikeIndex];
        if (existingLike.liked) {
          existingLike.liked = false;
          post.likes.pull(existingLike._id);
         
        } else {
          existingLike.liked = true;
        }
      } else {
        post.likes.push({ userId, liked: true });
      }
  
      await QuestionModel.updateOne({ _id: postId }, post);
  
      return res.status(200).json({ message: "Like status updated successfully", post });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
 
  
export const Comments = async(req,res)=>{
    try {
        let {comment,postId,userId,userType} = req.body 
       console.log('userId',userType);
      
       const newComment =  await postCommentModel.create({
        userType:userType,
        userId:userId,
        post:postId,
        content:comment
       })
        res.status(200).json({data:'ok'})
    } catch (error) {
        res.status(400).json({ error: error.message });       
         console.log(error.message);
    }
}

export const DeletePost= async(req,res)=>{
    try {
        const {postId} = req.body
        const postUpdate = await postModel.findByIdAndUpdate(postId, { isActive: false });
        res.status(200).json({message:'sucessfully deleted'})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


export const SavePost = async(req,res)=>{
    try {
        let {postId,userId,Type} = req.body;
        console.log(postId,userId,Type);
        if(Type === 'professional'){
            console.log('ssssss',Type);
            const exist = await proModel.findOne({_id:userId,savedPost:{$elemMatch:{postId}}})
            console.log('essss',exist);
            if(exist){
                console.log('kkkkkkkkk');
                return res.json({message: 'Post already saved',isTrue:false  })
            }
         const response = await proModel.findByIdAndUpdate(userId,{$push:{savedPost:{postId}}})
        }else if('users'){
            const exist = await userModel.findOne({_id:userId,savedPost:{$elemMatch:{postId}}})
            console.log('essss',exist);
            if(exist){
                console.log('kkkkkkkkk');
                return res.json({message: 'Post already saved',isTrue:false })
            }
         const response = await userModel.findByIdAndUpdate(userId,{$push:{savedPost:{postId}}})
        }

        return res.status(200).json({ message: 'Post saved successfully',isTrue:true});
    } catch (error) {
        res.status(500).json({error:error.message,message: 'Post not saved '})

    }
}


export const Report = async(req,res)=>{
    try {
        const {postId,userId,userType,selectedReason} = req.body
        console.log(postId,userId,userType,'----------');
        const response = await postModel.updateOne({_id:postId},{$push:{report:
                                    {userType:userType,
                                     userId:userId,
                                     reason:selectedReason,                                    
                                     isReported:true
                                    }}})
        return res.status(200).json({message:'reported sucessfully'})                           
        
    } catch (error) {
        res.status(500).json({error:error.message,message: 'report not saved '})

    }
}


export const questionComment = async(req,res)=>{
    try {
        let {comment,postId,userId,userType} = req.body 
       console.log('userId',userType);
      
       const newComment =  await questionCommentModel.create({
        userType:userType,
        userId:userId,
        post:postId,
        content:comment
       })
        res.status(200).json({data:'ok'})
    } catch (error) {
        res.status(400).json({ error: error.message });       
         console.log(error.message);
    }
}


export const Following = async (req, res) => {
    try {
        const { userId, userType, followerId, followerType } = req.body;
        let user;
        let followUser

        if (userType === 'professional') {
            user = await proModel.findOne({ _id: userId });
            

            const existingFollowIndex = user.follow.findIndex(
                (follower) => follower.followersId && follower.followersId.toHexString() === followerId
            );

            if (existingFollowIndex !== -1) {
                const existFollow = user.follow[existingFollowIndex];
                if (existFollow.followed) {
                    user.follow.pull(existFollow._id);
                } else {
                    existFollow.followed = true;
                }
            } else {
                user.follow.push({ userType: followerType, followersId: followerId, followed: true });
            }

            await user.save();
        } else if (userType === 'users') {
            user = await userModel.findOne({ _id: userId });

            const existingFollowIndex = user.follow.findIndex(
                (follower) => follower.followersId && follower.followersId.toHexString() === followerId
            );

            if (existingFollowIndex !== -1) {
                const existFollow = user.follow[existingFollowIndex];
                if (existFollow.followed) {
                    user.follow.pull(existFollow._id);
                } else {
                    existFollow.followed = true;
                }
            } else {
                user.follow.push({ userType: followerType, followersId: followerId, followed: true });
            }

            await user.save(); 
        }


        if (followerType === 'professional') {
            followUser = await proModel.findOne({ _id: followerId });
            const existingFollowIndex = followUser.following.findIndex(
                (follower) => follower.followersId && follower.followersId.toHexString() === userId
            );
            if (existingFollowIndex !== -1) {
                const existFollow = followUser.following[existingFollowIndex];
                if (existFollow.followed) {
                    followUser.following.pull(existFollow._id);
                } else {
                    existFollow.followed = true;
                }
            } else {
                followUser.following.push({ userType: userType, followersId: userId, followed: true });
            }
        
            await followUser.save();
        
        } else if (followerType === 'users') {
            followUser = await userModel.findOne({ _id: followerId });
        
            const existingFollowIndex = followUser.following.findIndex(
                (follower) => follower.followersId && follower.followersId.toHexString() === userId
            );
        
            if (existingFollowIndex !== -1) {
                const existFollow = followUser.following[existingFollowIndex];
                if (existFollow.followed) {
                    followUser.following.pull(existFollow._id);
                } else {
                    existFollow.followed = true;
                }
            } else {
                followUser.following.push({ userType: userType, followersId: userId, followed: true });
            }
        
            await followUser.save();
        }
        

        res.status(200).json({ message: 'Follower added/removed successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};




export const GetQuestion = async (req,res)=>{
    try {
        console.log('Fetching image URL...');
    const randomImage = await QuestionModel.findOne() 
    const post = await QuestionModel.find({}).sort({_id:-1})
    const pros = await proModel.find({})
    const comments = await questionCommentModel.find({}).sort({_id:-1})
    const users = await userModel.find({})

    if (randomImage && randomImage.image) {
      res.json({ imageUrl: randomImage.image[0],message:randomImage.message,
                   randomImage,post,pros,comments,users });
    } else {
      console.log('Image not found');
      res.status(404).json({ message: 'Image not found' });
    }
        
    } catch (error) {
        res.status(500).json({message:'error fetching image url',error:error.message})
    }
}
