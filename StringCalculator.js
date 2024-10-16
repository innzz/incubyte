export class StringCalculator {
    add(numbers) {
      // If the input is empty, return 0
      if (!numbers) return 0;
  
      // Replace literal `\\n` with actual newline characters
      numbers = numbers.replace(/\\n/g, '\n');
  
      let delimiter = /,|\n/; // Default delimiters: comma and newline
  
      // Check if a custom delimiter is specified
      if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
  
        // Ensure that there is at least one line of numbers after the delimiter line
        if (parts.length < 2) {
          throw new Error("Invalid input format: delimiter line is not followed by numbers");
        }
  
        // Use the custom delimiter from the first part
        const customDelimiter = parts[0].substring(2).trim(); // Get the delimiter from the first line
        delimiter = new RegExp(customDelimiter); // Create a RegExp for the custom delimiter
        numbers = parts.slice(1).join('\n'); // Combine remaining parts as actual numbers
      }
  
      // Split numbers using the specified delimiter and convert them to integers
      const numArray = numbers
        .split(delimiter)
        .map(num => parseInt(num.trim(), 10)) // Trim spaces and convert to integers
        .filter(num => !isNaN(num)); // Remove any NaN values
  
      // Check for negative numbers
      const negatives = numArray.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
      }
  
      // Calculate the sum of the numbers
      return numArray.reduce((sum, num) => sum + num, 0);
    }
  }
  