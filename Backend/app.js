import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import users from './users.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const user=users.find((u)=>
        u.username===username
    );
    if(user){
            return res.status(401).json({ success: false, message: "UserName Already Exists!!" });
    }
    users.push({username:username,password:password});
    return res.json({
        success:true,
        message:"Created Successfully!!"
    })
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        return res.json({ success: true, message: "Login Successful" });
    }

    return res.status(401).json({ success: false, message: "Invalid Credentials" });
});

app.listen(5000, () => {
    console.log("Server Running");
});
