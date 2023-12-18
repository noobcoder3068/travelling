import express, { urlencoded } from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname+ "/public/create.html");
});

app.post("/create", (req,res)=>{
    res.sendFile(__dirname+ "/public/createdone.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});