// Polyfill for bind method 
// Creating our own implementation for bind method 

let x = {
    firstname : "Akshay" ,
    lastname : "Saini" ,
    
}


let printName = function(hometown , state , country) {
    console.log(this.firstname + " " + this.lastname + "," + hometown + "," + state + "," + country) ;
}


let printMyName = printName.bind(x,"Dehradun") ;
printMyName("Uttarakhand","India");


// Implementation of My Own Bind Method 
Function.prototype.mybind = function(...args){
    let obj = this  
    params = args.slice(1);
    return function (...args2) {
       obj.apply(args[0],[...params , ...args2]) ;
    }
}

let printMyName2 = printName.mybind(x,"Dehradun") ;
printMyName2("Uttarakhand" , "India") ;
