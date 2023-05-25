// Explanation:

// 1. The sleep function takes a positive integer millis as input.
// 2. It then creates a Promise that resolves after millis milliseconds using the setTimeout function.
// 3. The Promise is then awaited using the await keyword, which allows the function to pause execution until the Promise is resolved.
// If you are not familar with 'await' then you may use 'return' instead like this:
// return new Promise(resolve => setTimeout(resolve, millis));

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello, world!');
//     }, 1000);
// });
  
// promise.then(result => {
//     console.log(result);
// });