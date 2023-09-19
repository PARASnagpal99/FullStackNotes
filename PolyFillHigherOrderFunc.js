// PolyFill for MAP 
// JS Map :-> array.map((ele , indx , arr) => {})

Array.prototype.myMap = function(cb){
      let temp = [] ;
      for(let i = 0 ; i < this.length ; ++i){
          temp.push(cb(this[i],i,this));
      }
      return temp ;
}

const arr = [1,2,3,4];
const newArr = arr.myMap((ele , indx , i) => {
      return ele * 10 ;
})
console.log(newArr);


// PolyFill For Filter 
Array.prototype.myFilter = function(cb){
       let temp = [] ;
       for(let i = 0 ; i < this.length ; ++i){
           if(cb(this[i],i,this)) temp.push(this[i],i,this);
       }
       return temp ;
}

const arr2 = arr.filter((ele , i , arr) =>{
      return (ele > 2);
})

console.log(arr2);


// For Reduce 
// arr.reduce((acc , curr , i , arr) => {} , 0);

Array.prototype.myReduce = function(cb , initialValue){
      var accumulator = initialValue ;
      for(let i = 0 ; i < this.length ; ++i){
         accumulator = (accumulator ? cb(accumulator , this[i] , i , this) : this[i]);
      }
      return accumulator ;
}

const sum = arr.myReduce((acc , curr , i , arr)=>{
      return acc + curr ;
},0);
console.log(sum);











