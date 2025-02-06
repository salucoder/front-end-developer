// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    try {
      const display = document.getElementById('display');
      display.value = eval(display.value);
    } catch (error) {
      alert('Invalid expression');
    }
  }
  