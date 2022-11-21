// javascript tricky and logic interiview question

//1
// let a=[]
// let b=[]
//console.log(a==b)// false
//console.log(a===b)//false
//becouse the memory location is not the same for anyone

//2

// let a=[]
// let b=a;
// console.log(a==b)// true
// console.log(a===b)//true
// becouse the memory location a and b is the same 

//3

// let a=[20]
// let b=[20];
// console.log(a[0]==b[0])// false
// console.log(a[0]===b[0])//false
// is not compare the memory 

//4
// let z=[1,2,3,4]
// let a={name:"nishu"};
// console.log(...z)// 1 2 3 4

//5

//console.log(typeof NaN)// not a number   //output: number

//6

// let data =10 - -10
// console.log(data)// 20

//7

// let set =new Set([1,1,2,3,4]) // set method is used ddublicate element is removed
// console.log(set)// Set(4) {1,2,3,4}

//8
// let data={name:"nishu"};
// console.log(delete data.name) // true

//9
// let data={name:"nishu"};
// console.log(delete data)// false
// can not delet data directly


//10

// let data =["peter", "anil", "nishu"]
// const [y]=data;
// console.log(y) // peter

//11

// let data =["peter", "anil", "nishu"]
// const [,y]=data;// how to get second value
// console.log(y) // anil

//12

// const data ={name:"anil", age:25, skill:"js"}
// const {name}=data;
// console.log(name)
// how to get name property without . operater

//13

// const data ={name:"anil", age:25, skill:"js"}
// const info ={city:"jaipur",  mail:"anil@gmail.com"}
// // merge 2 object
// merge ={...data,...info}

// console.log(merge)

//14
// const data ={name:"anil", age:25, skill:"js"}
// const info ={city:"jaipur",  mail:"anil@gmail.com"}

// merge ={data,...info}

// console.log(merge)

//15
// const data ={name:"anil", age:25, skill:"js"}
// const info ={city:"jaipur",  skill:"react"}

// merge ={...data,...info}

// console.log(merge)

//16

// const data="anil"
// console.log(data()) // error: data is not a function

//17

// const result =false || {} || null;
// console.log(result)// {} becouse or operater is use first positive value

//18

// const result =false || null || '';
// console.log(result)// ' ' ('' empty string is not a positive value) or 
// becouse if the operator does not a get positive value , then it takes the last value

//19
// const result =[] || 0 || true;
// console.log(result) //[]

//20
// console.log(Promise.resolve(5)) // Promise {5}

//21
// JSON.parse(); use parses json to a javascript value

//22

// let data='sidhu';

// function getData(){
//     console.log(data)
//     let data='anil'
// }
// getData()// error

//23

// let data='sidhu';

// function getData(){
//     console.log(data)
    
// }
// getData()//sidhu

//24

// console.log(`${(x=>x)('i love')} to program`)

//25
//output should be 6
// function samValues(x,y,z){
//     return x+y+z
// }
// console.log(samValues(...[1,2,3]))
//samValues([...1,2,3])
//samValues([...[1,2,3]])
//samValues(...[1,2,3])
// samValues([1,2,3])






