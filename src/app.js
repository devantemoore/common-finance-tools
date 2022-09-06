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


    var displayCalculation = document.getElementById("monthlyPayment")

    // Monthly Payment = Principal * [ (i/12mo)(i + 1)^LD]/[(1 + i)^n - 1]
    let monthlyInterest = (interestRate/100)/12
    let loanDurationInMonths = loanDuration*12
    let loanAmount = homePrice - downPayment
    var monthlyPayment = loanAmount * ((monthlyInterest*(monthlyInterest + 1)**loanDurationInMonths)/((monthlyInterest + 1)**(loanDurationInMonths) - 1));

    displayCalculation.innerText = monthlyPayment;
}


