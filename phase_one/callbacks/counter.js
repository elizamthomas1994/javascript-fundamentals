let counter = 0

const increment = () => {
  counter += 1
  console.log(counter);
}

const executeAfterDelay = (delay, callbackFunction) => {
  setInterval(callbackFunction, delay * 1000);
}

executeAfterDelay(2, increment);