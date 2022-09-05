console.log("hello from app.js")

function calculate() {
    //TODO: clean up function/implement validation
    validate();
    var homePrice = document.getElementById("homePrice").value
    var downPayment = document.getElementById("downPayment").value
    var interestRate = document.getElementById("interestRate").value
    var loanDuration = document.getElementById("loanDuration").value
    var displayCalculation = document.getElementById("monthlyPayment")
    // console.log(homePrice, downPayment, interestRate, loanDuration)
    // Monthly Payment = Principal * [ (i/12mo)(i + 1)^LD]/[(1 + i)^n - 1]
    let monthlyInterest = (interestRate/100)/12
    let loanDurationInMonths = loanDuration*12
    let loanAmount = homePrice - downPayment
    var monthlyPayment = loanAmount * ((monthlyInterest*(monthlyInterest + 1)**loanDurationInMonths)/((monthlyInterest + 1)**(loanDurationInMonths) - 1));
    //var monthlyPayment = ((monthlyInterest + 1)^(120) - 1)
    console.log(monthlyPayment)

    displayCalculation.innerText = monthlyPayment;
}

function validate(){

}
