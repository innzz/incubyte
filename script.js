class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/; // Default delimiters: comma or newline
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].substring(2)); // Custom delimiter
      numbers = parts[1]; // Actual numbers
    }

    const numArray = numbers
      .split(delimiter)
      .map((num) => parseInt(num, 10))
      .filter((num) => !isNaN(num)); // Convert to numbers and remove invalid entries

    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

function calculate() {
  const inputString = document.getElementById("inputString").value;
  const calculator = new StringCalculator();
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  // Clear previous results
  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  try {
    const result = calculator.add(inputString);
    resultDiv.innerHTML = `Result: ${result}`;
  } catch (error) {
    errorDiv.innerHTML = error.message;
  }
}
