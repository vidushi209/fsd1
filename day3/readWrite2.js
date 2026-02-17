import fs from "fs/promises"
const readFile=async(file,data)=>{
    try{
        await fs.readFile(file,data);
        console.log("File has been read succesfully");
    }catch(error){
        console.log("unable to read file");
    }
}
readFile("example2.txt","This data has been read successfully");
const appendFile=async(file,data)=>{
    try{
        await fs.appendFile(file,data);
        console.log("File has been appended succesfully");
    }catch(error){
        console.log("unable to write file");
    }
}
appendFile("example2.txt","This data has been written by fs.write");
const writeFile=async(file,data)=>{
    try{
        await fs.writeFile(file,data);
        console.log("File has been written succesfully");
    }catch(error){
        console.log("unable to write file");
    }
}
writeFile("example2.txt","This data has been written by fs.write");