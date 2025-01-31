function decrement(num) {

  if (num < 0) {
    return;
  }

  console.log(num);

  decrement(num - 1);
}

decrement(9);