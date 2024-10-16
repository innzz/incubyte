import { StringCalculator } from "./StringCalculator.js";

document.getElementById('calculate').addEventListener('click', () => {
    const input = document.getElementById('inputString').value.trim(); // Trim any leading/trailing whitespace
    const calculator = new StringCalculator();
    try {
      const result = calculator.add(input);
      document.getElementById('result').textContent = `Sum: ${result}`;
    } catch (error) {
      document.getElementById('result').textContent = error.message;
    }
  });
