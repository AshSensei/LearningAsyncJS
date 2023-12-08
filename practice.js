//synchronous function
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"

//synchronous functions can lend to functions and pages that take wayyyyy too long to load
//event handlers call the function whenever the event happens
//callbacks are functions passed into another function and called at appropriate time

//promises are just async objects that fulfill based on their state
//if we get a response we can then pull data from that response
//error handling is important when it comes to async 
//pending: promise created but not succeeding or failed
//fulfilled: succeeded, then handler called
//rejected: failed, catch handler called
//you can chain promises and fulfill or reject whenever 


//async keyword makes a function an async function and you can make sure a call awaits a process and it will return a complete response object
//only use await inside an async function