
//Non-Recursive Solution
function fibs(num) {
    let arr = [0, 1];
    if(num <= 0) return "Enter a valid number to get sequence";
    if(num === 1) return [0];
    if(num === 2) return arr;

    for(let i = 2; i < num; i++) 
        arr.push(arr[arr.length-2]+arr[arr.length-1]);
        return arr;
}
console.log("Non-Recursive / Iterative Solution", fibs(7)); // [0, 1, 1, 2, 3, 5, 8];
console.log("Non-Recursive / Iterative Solution", fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

//Recursive Solutionzzzz
function fibsRecursion(num) {
    // if(num <= 0) return "enter a valid number to get a sequence";
    // if(num === 1) return [0];
    // if(num === 2) return [0, 1];
    // return [...fibsRecursion(num-1), fibsRecursion(num-1)[num-2] + fibsRecursion(num-2)[num-3]];
    return num <= 0 ? "enter a valid number to get a sequence": num === 1 ? [0] : num === 2 ? [0, 1] : [...fibsRecursion(num-1), fibsRecursion(num-1)[num-2] + fibsRecursion(num-1)[num-3]];
}

console.log("Using Recursion", fibsRecursion(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
