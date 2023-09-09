import express from 'express';
import { Register,Login,Home,GoogleLogin,GetPost,userDetails,Like,Comments,
         ClientDetails,Following,GetQuestion,likeQuestion,questionComment,
         DeletePost,SavePost,Report} from '../controllers/userController.js';
import { getRequirements,Hiring } from '../controllers/requirementController.js';
import { authMiddleware as auth } from '../middleware/auth.js';
const userRoute = express.Router()

userRoute.post('/register',Register);
userRoute.post('/login',Login)
userRoute.get('/',auth,Home)
userRoute.post('/googleLogin',GoogleLogin)

userRoute.get('/getPost',auth,GetPost)
userRoute.get('/userDetails',auth,userDetails)
userRoute.get('/clientDetails',auth,ClientDetails)
userRoute.post('/like',auth,Like)
userRoute.post('/comment',auth,Comments)
userRoute.post('/deletePost',auth,DeletePost)
userRoute.post('/savePost',auth,SavePost)
userRoute.post('/report',auth,Report)


userRoute.get('/getQuestion',auth,GetQuestion)
userRoute.post('/likeQuestion',auth,likeQuestion)
userRoute.post('/following',auth,Following)
userRoute.post('/questionComment',auth,questionComment)

userRoute.get('/requirement',getRequirements)

userRoute.post('/hiring',Hiring)



export default userRoute;