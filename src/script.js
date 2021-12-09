function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

// // Usage
// sleep(500).then(() => {
//     //   code
// });
// The sleep are asynchronous so they will execute independently of other sleeps

sleep(5000).then(() => {
    console.log(document.getElementById("Portfolio").style.fontFamily)
});