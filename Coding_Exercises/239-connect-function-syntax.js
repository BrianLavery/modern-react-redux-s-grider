// This function returns a function
function connect() {
    return function() {
        return 'Hi there!'
    }
}

// So when we call it once we get a function
const callOnce = connect()
console.log(callOnce) // => [Function (anonymous)]

// When we call it twice we get the result
const callTwice = connect()()
console.log(callTwice) // => Hi there!