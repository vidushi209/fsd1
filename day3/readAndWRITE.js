import fs from "fs";
const readfFileSync=(file)=>{
    try{
        const data=fs.readFileSync(file,"utf-8");
        console.log(data);

    }catch(error){
        console.log("Unable to read");
    }
}
const appendFileSync=()=>{
    try{
        fs.appendFileSync();
        console.log("File has been appended");

    }catch(error){
        console.log("unable to write");
    }
}
appendFileSync("exp2","this data is appended");
 const writeFileSync = (file,data)=>{
     try{
     fs.writeFileSync(path,data);
     console.log("File has been created suucessfully");
     }catch(error){
         console.log("unable to write");
     }
 }
 writeFileSync("example.txt","this data is written through sunc");