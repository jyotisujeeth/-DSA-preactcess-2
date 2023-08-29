var bestClosingTime = function(customers) {
    let max = 0;
    let balance = 0;
    let answer = 0
    for(var i = 0;i < customers.length;i++){
        if(customers[i] === "Y"){
            balance++
        }
        else balance--
        if(balance > max){
            max = balance;
            answer = i + 1
        }
    }
    return answer;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const bestClosingTime = (customers) => {
  // Count the number of "Y" occurrences in the customers array
  let numberOfYs = 0;
  for (const char of customers) {
    if (char === "Y") {
      numberOfYs++;
    }
  }
  
  const totalYs = numberOfYs;
  let optimalTime = 0;
  let lowestPenalty = totalYs;
  
  // Iterate through the customers array to find the optimal closing time
  for (let i = 0; i < customers.length && numberOfYs > 0; i++) {
    // Calculate the number of "N" occurrences before the current index
    const numberOfNs = i - (totalYs - numberOfYs);
    
    // Update the count of remaining "Y" occurrences
    if (customers[i] === "Y") {
      numberOfYs--;
    }
    
    // If the current penalty is not lower, continue to the next iteration
    if (numberOfYs + numberOfNs >= lowestPenalty) {
      continue;
    }
    
    // Update the best closing time and the lowest penalty
    optimalTime = i + 1;
    lowestPenalty = numberOfYs + numberOfNs;
  }
  
  return optimalTime;
};

// Test cases
console.log(bestClosingTime("YYNY")); // Output: 2
console.log(bestClosingTime("NNNNN")); // Output: 0
console.log(bestClosingTime("YYYY")); // Output: 4
const bestClosingTime = (customers) => {
  // Count the number of "Y" occurrences in the customers array
  let numberOfYs = 0;
  for (const char of customers) {
    if (char === "Y") {
      numberOfYs++;
    }
  }
  
  const totalYs = numberOfYs;
  let optimalTime = 0;
  let lowestPenalty = totalYs;
  
  // Iterate through the customers array to find the optimal closing time
  for (let i = 0; i < customers.length && numberOfYs > 0; i++) {
    // Calculate the number of "N" occurrences before the current index
    const numberOfNs = i - (totalYs - numberOfYs);
    
    // Update the count of remaining "Y" occurrences
    if (customers[i] === "Y") {
      numberOfYs--;
    }
    
    // If the current penalty is not lower, continue to the next iteration
    if (numberOfYs + numberOfNs >= lowestPenalty) {
      continue;
    }
    
    // Update the best closing time and the lowest penalty
    optimalTime = i + 1;
    lowestPenalty = numberOfYs + numberOfNs;
  }
  
  return optimalTime;
};

// Test cases
console.log(bestClosingTime("YYNY")); // Output: 2
console.log(bestClosingTime("NNNNN")); // Output: 0
console.log(bestClosingTime("YYYY")); // Output: 4
