import { Router } from "express";
import { assighnmentModel } from "../Models/Assighnment.js";
import {hash} from 'bcrypt';
import jwt from 'jsonwebtoken';
const mainRouter=Router();
mainRouter.get('/assighnment',async (req,res)=>{
  try { const data= assighnmentModel.find;
   
    
  }
   catch (error) 
   { 
    console.log(error);
    
  }
   
});
mainRouter.post('/signup',async (req,res)=>{
const {firstname, email,password}= req.body;
const encryptedPassword = await hash(password, 10);
try {
   const username = await  userModel.create({
    username,
    email,
    password: encryptedPassword

   } );

   res.status(201).json({
    message: " User registered successfully", user
   });
   res.end();
} catch (error) {
    console.log(error);
    res.json({message:error});
    res.end();
    
}
});

mainRouter.post('/login', async(req,res)=>{

    const {username, password} = req.body;


    try{
        const user = await userModel.findOne({username});

        if(!user) {
            res.status(401).json({message: "User not found"});
            res.end();
        }

        const isPasswordValid = await compare(password, user.password);

        if(!isPasswordValid){
            res.status(401).json({message:"Unauthorized, invalid credentials"});
            res.end();
        }
        const token = jwt.sign({userId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({token: token });
        res.end();

    }
    catch(err) {
        console.log(err);
    }

});
  
export default mainRouter; 