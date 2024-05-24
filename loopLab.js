//Part 1: Fizz Buzz
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

let y = 1

while ( y <= 100){
    if (y % 3 ===0 && y % 5 ===0){
        console.log(`Fizz Buzz`)
    } else if (y % 5 ===0){
        console.log(`Buzz`)
    } else if (y % 3 ===0){
        console.log(`Fizz`)
    } else console.log(y)
    y++
}


//Part 2: Prime Time
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

let num = 47


mainLoop: for(let i = num; i < 100; i++){
    // 1 is NOT Prime
    if(num === 1) continue

    for(let j=num - 1; j>1; j--) {
        if(i % j === 0) continue mainLoop
    }

    console.log(i)

    break

}


// Part 3: Feeling Loopy
// Your task is to write a script that accomplishes the following:
// - Loop through the characters of a given CSV string.
// - Store each “cell” of data in a variable.
// - When you encounter a comma, move to the next cell.
// -When you encounter the “\r\n” sequence, move to the next “row.”
// -Log each row of data.
//   - You do not need to format the data, the following works well.
//   - console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// - There will only be 4 cells per row.
// - There will be no escaped characters other than “\n”.

const csvFile = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`

const rows = csvFile.split(`\n`)

for (let i = 0; i < rows.length; i++) {
    console.log(rows[i])
}