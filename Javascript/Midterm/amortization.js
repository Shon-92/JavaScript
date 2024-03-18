
function calculateAmortization() {
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var termYears = parseInt(document.getElementById('termYears').value);
    var interestRate = 0.0575;

    if (termYears !== 15 && termYears !== 30) {
      alert("Please enter a valid term (15 or 30 years).");
      return;
    }

    var termMonths = termYears * 12;
    var monthlyInterestRate = interestRate / 12;
    var monthlyPayment = ((monthlyInterestRate * loanAmount) / (1 - Math.pow(1 + monthlyInterestRate, -termMonths))).toFixed(2);

    var totalInterest = (monthlyPayment * termMonths - loanAmount).toFixed(2);
    var totalMortgageAmount = (parseFloat(loanAmount) + parseFloat(totalInterest)).toFixed(2);

    var output = "Mortgage Term: " + termYears + " years<br>";
    output += "Mortgage Interest Rate: " + (interestRate * 100).toFixed(2) + "%<br>";
    output += "Mortgage Amount: $" + loanAmount.toFixed(2) + "<br>";
    output += "Total Interest Amount: $" + totalInterest + "<br>";
    output += "Total Mortgage Amount: $" + totalMortgageAmount + "<br><br>";
    output += "Monthly Mortgage Payments:<br>";

    var remainingBalance = loanAmount;
    for (var month = 1; month <= termMonths; month++) {
      var interestPayment = (remainingBalance * monthlyInterestRate).toFixed(2);
      var principalPayment = (monthlyPayment - interestPayment).toFixed(2);
      remainingBalance -= principalPayment;

      output += "Month " + month + ": $" + monthlyPayment + ", Mortgage Loan Balance: $" + remainingBalance.toFixed(2) + "<br>";

      if (remainingBalance <= 0) {
        output += "This is the Ending Amortization Calculator...";
        break;
      }
    }

    document.getElementById('output').innerHTML = output;
  }