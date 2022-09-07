console.log("hello from app.js")

function calculate() {    
    var homePrice = document.getElementById("homePrice").value
    var downPayment = document.getElementById("downPayment").value
    var interestRate = document.getElementById("interestRate").value
    var loanDuration = document.getElementById("loanDuration").value

    var validation = document.getElementById("validation")
    if (homePrice=="" || downPayment=="" || interestRate=="" || loanDuration==0)
    {
        validation.style.color = "red";
        validation.innerText = "Fields cannot be left blank"
        return;
    }
    if (parseFloat(homePrice) < parseFloat(downPayment)){
        validation.style.color = "red";
        validation.innerText = "How your down payment greater than the home price ???"
    }


    var displayCalculation = document.getElementById("principalPlusInterestValue")

    // Monthly Payment = Principal * [ (i/12mo)(i + 1)^LD]/[(1 + i)^n - 1]
    let monthlyInterest = (interestRate/100)/12
    let loanDurationInMonths = loanDuration*12
    let loanAmount = homePrice - downPayment
    var principalPlusInterest = loanAmount * ((monthlyInterest*(monthlyInterest + 1)**loanDurationInMonths)/((monthlyInterest + 1)**(loanDurationInMonths) - 1));

    displayCalculation.innerText += "$ " + currencyFormat(principalPlusInterest.toFixed(2));
}

function currencyFormat(number){
    if(number==null) return;
    let formattedNumber = number.toString().split('');
    let numberOfDigits = formattedNumber.length - 3; //subtract ".00"
    let numberOfCommas = Math.floor(numberOfDigits / 3);
    numberOfCommas = numberOfDigits % 3 == 0 ? numberOfCommas - 1 : numberOfCommas; // comma may not be necessary
    if (numberOfDigits <= 3) return number;
    switch (numberOfCommas){
        case 0:
            return formattedNumber.join('');
        case 1:
            formattedNumber.splice(1, 0, ',');
            return formattedNumber.join('');
            
        case 2:
            formattedNumber.splice(1, 0, ',')
            formattedNumber.splice(5, 0, ',')
            return formattedNumber.join('');
        case 3:
            formattedNumber.splice(1, 0, ',')
            formattedNumber.splice(5, 0, ',')
            formattedNumber.splice(5, 0, ',')
            return formattedNumber.join('');
        default:
            return;
    }
}


