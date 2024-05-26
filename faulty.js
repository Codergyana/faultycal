/* creat a faulty calculator
these faulty calculator does:
+ --> -
* --> +
- --> /
/ --> **
it perform wrong operation 10% of time
*/
function main(){
let random = Math.random()
let a = prompt("enter 1st no.")
let c = prompt("enter operation")
let b = prompt("enter 2nd no.")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}
if (random > 0.40) {
 console.log(`the result is ${a} ${c} ${b}`)
   alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c]
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    alert("you are fool....")

}
}