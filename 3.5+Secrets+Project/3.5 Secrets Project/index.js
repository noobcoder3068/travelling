//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import Express  from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port=3000;
const app=Express();
var isvalid=false;

app.use(bodyParser.urlencoded({extended:true}));

function passwordCheck(req,res,next){
    const password=req.body["password"];
    if(password === "iLoveProgramming"){
        isvalid=true;
    }
    next();
}

app.use(passwordCheck);

app.get("/", (req,res)=>
{
     res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    if(isvalid)
        res.sendFile(__dirname+"/public/secret.html");
    else
        res.sendFile(__dirname+"/public/index.html");
});

app.listen(port, ()=>
{
    console.log("listening on port: ",{port});
});