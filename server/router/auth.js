const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate") ;


require('../db/conn');
const User = require("../model/userSchema");

router.get('/',(req,res) =>{
    res.send(`Hello Server via auth`);
 });
 
// Using PROMISES

//  router.post('/register',(req,res) =>{
   
//    const {name,email,phone,work,password,cpassword} = req.body;
   
//    if(!name || !email || !phone || !work || !password || !cpassword){
//       return res.status(422).json({ error: "Plz fill the form completely...!!!" });
//    }

//    User.findOne({email: email})
//    .then((userExist) => {
//        if(userExist){
//          return res.status(422).json({error: "Email Already Exists...!!!"});
//        }
//        const user = new User({name,email,phone,work,password,cpassword});
      
//        user.save().then(() =>{
//          res.status(201).json({meassage: "User Registered Successfully...!!!"});
//        }).catch((err) => res.status(500).json({error: "Fails to Register...!!!"}));

//    }).catch(err => { console.log(err); })

//  });


// Using ASYNC-AWAIT

router.post("/register", async(req,res) =>{
   
   const {name,email,phone,work,password,cpassword,designation,
    hobby,
    webskill,
    qualification,
    langs,webproject,ExamExperience,WorkExperience} = req.body;
   
   if(!name || !email || !phone || !work || !password || !cpassword){
      return res.status(422).json({ error: "Plz fill the form completely...!!!" });
   }
  try{
     const userExist = await User.findOne({email: email});
       
     if(userExist){
          return res.status(422).json({error: "Email Already Exists...!!!"});
       }
       else if(password != cpassword){
         return res.status(422).json({error: "Password doesn't match...!!!"});
       }
       else{
         const user = new User({name,email,phone,work,password,cpassword,designation,
          hobby,
          webskill,
          qualification,
          langs,webproject,ExamExperience,WorkExperience});
      
         await user.save();
  
         res.status(201).json({error: "User Registered Successfully...!!!"}); 
       }

  }catch(err){
   console.log(err);
  }
   
 });

router.post("/editprofile", async(req,res) =>{
   
   const {name,email,phone,work,password,cpassword,designation,
    hobby,
    webskill,
    qualification,
    langs,webproject,ExamExperience,WorkExperience} = req.body;
   
   if(!password || !cpassword){
      return res.status(422).json({ error: "Plz fill the form completely...!!!" });
   }
  try{
     await User.findOneAndUpdate({email: email}, {$set:{"phone":phone}, $set:{"work":work}, 
     $set:{"password":password}, $set:{"cpassword":cpassword},$set:{"designation":designation},
     $set:{"hobby":hobby}, $set:{"webskill":webskill}, $set:{"qualification":qualification}, 
     $set:{"langs":langs},$set:{"webproject":webproject},
     $set:{"ExamExperience":ExamExperience}, $set:{"WorkExperience":WorkExperience}},  (err, doc) => {
      if(err){
        console.log("Something wrong when updating data!");
    }
  
    console.log(doc);
  
         res.status(201).json({error: "User Updated Successfully...!!!"}); 
       });

  }catch(err){
   console.log(err);
  }
   
 });

// Login Route

router.post('/signin', async (req, res) => {
   
   try{
       const {email, password} = req.body;

       if(!email || !password){
         return res.status(400).json({error: "Plz fill the DATA...!!!"});
       }
    
       const userLogin = await User.findOne({email: email});
       
       if(userLogin){
         const isMatch = await bcrypt.compare(password,userLogin.password);

         const token = await userLogin.generateAuthToken();

         res.cookie("jwtoken", token,{
            expires: new Date(Date.now() +  258920000),
            httpOnly:true
         });

         if(isMatch){
            res.json({message:"Successfully Login...!!!"});
       }
       else{
         res.status(400).json({message:"Invalid Credentils Pass...!!!"});
       }
       }
       else{
         res.status(400).json({message:"Invalid Credentils Email...!!!"});
       }
       

   }catch(err){
        console.log(err);
   }
});


router.get('/about', authenticate, (req, res) => {
  console.log(`MyAbout`);
  res.send(req.rootUser);
});

router.get('/getData', authenticate, (req, res) => {
  console.log(`MyHome`);
  res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
  console.log(`MyLogout`);
  res.clearCookie('jwtoken', {path: '/'});
  res.status(200).send('User SignOut');
});


 module.exports = router;  