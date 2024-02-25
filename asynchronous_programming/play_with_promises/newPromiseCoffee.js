const coffee = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Your coffee is ready!');
    reject(Error('Your coffee is ready!'));
  }, 1500)
});

coffee
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log(error)
})
