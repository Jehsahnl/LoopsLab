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