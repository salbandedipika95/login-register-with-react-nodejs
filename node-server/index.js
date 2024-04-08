const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err=>console.log(err));
async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  // protocol : mongodb, 
  //port number : 27017, 
  //database name: demo 
  console.log('db connected');
}

const userSchema = new mongoose.Schema({
  username:String,
  dob:Date,
  email:String,
  password:String
});

const User = mongoose.model('User',userSchema);

const server = express();  

server.use(cors());
server.use(bodyParser.json());

server.post('/demo',async (req,res)=>{

  let user= new User();

  user.username=req.body.username;
  user.dob=req.body.dob;
  user.email=req.body.email;
  user.password=req.body.password;
  const doc = await user.save();

  const usern =await User.findOne({username});
  if(!user){
    return res.status(404).json({message:'user not found'});
  }

  const validpass= await bcrypt.compare(password, user.password);
  if(!validpass){
    return res.status(401).json({message:'invalid pass'});
  }

   res.json({message:'successful'});

  console.log(doc);
  res.json(doc);
})

server.get('/demo',async (req,res)=>{
  const docs = await User.find({})
  res.json(docs)
})

server.listen(8080,()=>{
  console.log('server started');   //ever running process
})