// // // // const obj = {
// // // //      name :"abdul",
// // // //      class:12,
// // // //      get()
// // // //      {
// // // //           console/log("hi");
// // // //      }
// // // // }
// // // // const {name} = obj;
// // // // console.log(Object.keys(obj));
// // // // const arr=[1,2,3,4,5,[2,3,[9,8]]];
// // // // const fla =arr.flat(Infinity);
// // // // console.log(fla)


// // // const sum = (...arguments)=>{
// // //      let sum=0;
// // //     for(let i of arguments)
// // //     {
// // //          sum +=i;
// // //     }
// // //     console.log(sum);
// // // };
// // // const data =[1,2,3,4,5,6];
// // // sum(...data);
// // const sum = (a,b)=>{
// //      return (a+b);
// // }
// // const sub = ()=>
// // {
// //      return (a-b);
// // }
// // const calculation = (operator , num1 , num2)=>{
// //         return operator(num1 , num2);
// // }
// // console.log(calculation(sum,1,2));
// console.log(a);
// var a;
// a="ali";


function sum(num1)
{
      return function(num2)
      {
           return function(num3)
           {
                console.log(num1 + num2 + num3);
           }
      }
}
sum(2)(3)(4);