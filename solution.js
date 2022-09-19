const argvs = process.argv.slice(2);

// const program = (op, arr) => {
//     let myArr = arr.map(num => +num);
//     myArr.forEach(element  => {
//         if(Number.isNaN(element)){
//             return `${element} is not a number, try again`
//         }});
//         switch (op) {
//             case "sum":
//                 myArr.reduce((a,b) => a+b,0)
//             break;
//             case "avg":
//                 myArr.reduce((a,b) => a+b)/arr.length;
//             break;
//             default:
//                 console.log("I cannot calculate that, please type either 'sum' (to calculate the sum) or 'avg' (to calculate the Average)");
//                 break;
//         }
// }

// console.log(program(argvs[0], argvs.slice(1)));

const myFunction = (op, arr) => {
    let x;
    for (let i = 0; i < arr.length; i++) {
       if(isNaN(parseInt(arr[i]))){
           x = arr[i];
       }
    }

   if(x){
    return `${x} is not a number, try again`
   }else{
       let myArr = arr.map(num => parseInt(num));
        switch (op) {
             case "sum":
                return myArr.reduce((a,b) => a+b,0)
             break;
             case "avg":
                return myArr.reduce((a,b) => a+b)/arr.length;
             break;
             case "med":
                let newArr = myArr.sort((a,b) => a-b);
                let len = newArr.length-1;
                if(newArr[len/2]%1 == 0){
                    return newArr[len/2];
                }else{
                    return (newArr[Math.floor(len/2)]+newArr[Math.ceil(len/2)])/2;
                }
             break;
             default:
                 console.log("I cannot calculate that, please type either 'sum' (to calculate the sum) or 'avg' (to calculate the Average)");
                 break;
         }
   }
}

console.log(myFunction(argvs[0], argvs.slice(1)));

