import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const app = express()
const port = 3000


app.use(express.json())
app.use(cors())


const tokenKey=("#$dbhhf^*(^bdshyggff3@!")
const kittySchema = new mongoose.Schema({
    email: {type:String,required:true},
    password: {type:String,required:true},
    role: {type:String,required:true,default:"User"}
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

mongoose.connect('mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>console.log("Not Connected!"))


app.get('/user',async (req, res) => {
    try {
        
        const token=req.headers.authorization
        const decoded=jwt.verify(token, tokenKey);
        if (decoded.role==="Admin") {
            const data=await Kitten.find({})
        return  res.json(data)
            
    }
    res.status(400).send("you dont permission")
    } catch (error) {
        res.send("bdhh")
    }
})

app.post('/user/signIn',async (req, res) => {
    const {email,password}=req.body
    const hashedPassword= await bcrypt.hash(password, 10)
    const data=new Kitten({email,password:hashedPassword})
    await data.save()
  res.send(data)
})

app.post('/user/login',async (req, res) => {
    const {email,password}=req.body
    const data=await Kitten.findOne({email:email})

    if (!data) {
       return res.status(404).send("user not found")
    }
    const isPassword=await bcrypt.compare(password, data.password)
    if (!isPassword) {
       return res.status(400).send("wrong password")
    }
    const token =  jwt.sign({ email:data.email,id:data._id,role:data.role }, tokenKey);
    res.status(200).json(token)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})