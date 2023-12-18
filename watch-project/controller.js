import admin_schema from './admin.model.js'
import category_schema from './category.model.js'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import pkg from "jsonwebtoken";
const {sign}=pkg





export async function AddAdmin(req,res){
    try {
        const {username,email,phone,password}=req.body;
        console.log(username,email,phone,password);
        if(!(username&&email&&phone&&password))
        return res.status(404).send("fields are empty")
    
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            admin_schema.create({username,email,phone,password:hashedPwd});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
    
}
export async function AddCategory(req, res) {
  try {
    const { category_name, Description } = req.body;
    console.log(category_name, Description);
    if (!(category_name && Description)) {
      return res.status(400).send("Fields are empty");
    }
    const task=await category_schema.create({ category_name, Description });

    res.status(200).send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}






export async function AdminLogin(req, res) {
  try {
   console.log(req.body);
   const { email, password } = req.body;
   const usr = await admin_schema.findOne({ email })
   console.log(usr);
   if (usr === null) return res.status(404).send("email or password doesnot exist");
   const success =await bcrypt.compare(password, usr.password)
   console.log(success);
   const {username}=usr
   if (success !== true) return res.status(404).send("email or password doesnot exist");
   const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
   console.log(username);
   console.log(token);
   res.status(200).send({ msg: "successfullly login", token })
  //  res.end();
   
  } catch (error) {
   console.log(error);
}
}







export async function home(req,res)
{
 
  try {
    
     const{username}=req.user;
    res.status(200).send({msg:`${username}`})
   } 
   catch (error) {
    res.status(404).send(error)
  }
}





export async function forgotAdminpwd(req, res) {
  const {email,password}=req.body;
  console.log(email);
  const hashedPassword = await bcrypt.hash(password,10);
  let task = await admin_schema.updateOne( {email} , { $set: { password: hashedPassword } });
  console.log(task);
  res.status(200).send(task);
}






export async function forgotUsername(req,res){
  const {username}=req.params;
  console.log(username);
  let task=await admin_schema.findOne({username})
  console.log(task);
  res.status(200).send(task)
}



