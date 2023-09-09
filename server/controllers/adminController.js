
import { generateAuthToken } from '../middleware/auth.js';
import categoryModel from '../models/categoryModel.js';
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt'
import postModel from '../models/postModel.js'
import proModel from '../models/proModel.js';




export const Home = async (req,res)=>{
  try {
    const admin = 'aaaa'
    res.status(200)
    
  } catch (error) {
    res.json({status:'failed',message:error.message})
  }
}





export const Login = async (req, res) => {
  try {
    const adminData = req.body;
    const admin = await userModel.findOne({ email: adminData.email, isAdmin: true });

    if (admin) {
      const match = await bcrypt.compare(adminData.password,admin.password);

      if (match) {
        const token = generateAuthToken(admin);
        return res.status(200).json({ token, check: true }); // Return an object containing token and check status
      }
    }

    return res.status(401).json({ message: 'Unauthorized login' }); // Unauthorized status
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' }); // Internal server error status
  }
};





export const AddCategory = async (req, res) => {
  const { categoryName } = req.body;
  const imageBase64String = req.file ? req.file.filename : null;

  try {
    const category = new categoryModel({
      categoryName,
      image: imageBase64String,
    });

    const savedCategory = await category.save();
    res.json(savedCategory);
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Error adding category" });
  }
}


export const BlockPost = async(req,res)=>{
  try {
    const {postId} = req.body
    console.log(postId,'pppppppppppppp');
    const response = await postModel.updateOne({_id:postId},{isBanned:true})
    res.status(200).json({message:'sucessfully blocked'})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export const BlockUser = async (req, res) => {
  try {
    const {userID,userType} = req.body
    const model = userType ==='users'?userModel:proModel

    const user = await model.findOne({ _id: userID });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedIsBanned = !user.isBanned;

    await model.updateOne({ _id: userID }, { isBanned: updatedIsBanned });

    res.status(200).json({ message: 'Successfully updated isBanned status', isBanned: updatedIsBanned });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
