const makeCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Your coffee is ready!');
    }, 500)
  })
}

const makeToast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Your toast is ready!');
    }, 2500)
  })
}

const coffeePromise = makeCoffee();
const toastPromise = makeToast();

// coffeePromise.then(data => {
//   console.log(data)
// })

// toastPromise.then(data => {
//   console.log(data)
// })
// но если нам нужно получить ВСЕ данные, а потом сделать с ними что-то, то

Promise.all([coffeePromise, toastPromise]).then( data => {
  console.log(data);
});

Promise.all([coffeePromise, toastPromise]).then(([coffeePromise, toastPromise]) => {
  console.log([coffeePromise, toastPromise]);
});
