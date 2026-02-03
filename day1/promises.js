
function f2(){
    console.log('inside f2');
}
f2();

const myPromise = new Promise((resolve, reject) => {
    let age=5;
    if(age>18){
        resolve("You are eligible to vote.");
    }    else{
        reject("You are not eligible to vote.");
    }});
    //console.log(myPromise);

// myPromise.then((message) => console.log(message)).catch((error) => console.log(error));

const f1=async()=>{
    const msg=await myPromise;
    console.log(msg);
}
f1();
