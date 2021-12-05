function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

// // Usage
// sleep(500).then(() => {
//     //   code
// });
// The sleep are asynchronous so they will execute independently of other sleeps

sleep(5000).then(() => {
    document.getElementById("logoNeumorph").style.opacity = "1";
});
sleep(7000).then(() => {
    document.getElementById("LogoAnim").style.opacity = "0";
    document.getElementById("LogoHolder").style.top = "-20%";
});