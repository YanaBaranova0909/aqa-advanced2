function divide(numerator, denominator) {

  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      throw new Error('Both arguments must be numbers');
  }
  
  if (denominator === 0) {
      throw new Error('Cannot divide by zero');
  }
  
    return numerator / denominator;
}

try {
    const result1 = divide(8, 2);
    console.log('Result 1:', result1);
}   catch (error) {
    console.error('Error 1:', error.message);
}   finally {
    console.log('Work is finished for example 1');
}

try {
    const result2 = divide(8, 0);
    console.log('Result 2:', result2);
}   catch (error) {
    console.error('Error 2:', error.message);
}   finally {
    console.log('Work is finished for example 2');
}

try {
    const result3 = divide(8, 'q');
    console.log('Result 3:', result3);
}   catch (error) {
    console.error('Error 3:', error.message);
}   finally {
    console.log('Work is finished for example 3');
}
