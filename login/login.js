import Express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app=Express();
const port=3000;
var isValid=false;

app.use(Express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

function passCheck(req,res,next)
{
    const pass=req.body["password"];
    if(pass=== "abdul")
        isValid=true;
    next();
}

app.use(passCheck);

app.get("/", (req,res)=>{
    res.sendFile(__dirname+ "/public/login.html");
});

app.post("/login", (req,res)=>{
    if(isValid)
        res.send("done");
    else
        res.sendFile(__dirname+ "/public/login.html");
});

app.listen(port, ()=>{
    console.log("this is host ",{port});
});