let numbers = [2,4,5,6,7,8];

const calculate = (numbers = [] ) => {
    let total=0;
    for (let i=0; i<numbers.length; i++){
        total+=numbers[i];


    }
    const high = Math.max(...numbers);
const [first, ...rest] = numbers;
const last = rest[rest.length-1]; 
    return {
   sum: total,
   max: high,
   first: first,
   last: last
};
};


 

console.log(calculate(numbers));
    

