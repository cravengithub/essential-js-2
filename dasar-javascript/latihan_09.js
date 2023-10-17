// Latihan Error Handling

function throwsException(){
     throw new Error('Problem');    
}

// throwsException();

function catchesException(){
    try{
        // throw throwsException;
        console.log("Program sukses");
    }catch(err){
        console.log('Ada error yang terjadi');
        console.log(err.message);
    }    
}
catchesException();