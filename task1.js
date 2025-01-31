function handleNum(number, evenCallback, oddCallback) {

  return number % 2 === 0 ? evenCallback() : oddCallback();
}

function handleEven() {
  return console.log('number is even');
}

function handleOdd() {
  return console.log('number is odd');
}

handleNum(4, handleEven, handleOdd); 
handleNum(5, handleEven, handleOdd);