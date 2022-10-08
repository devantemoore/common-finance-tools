console.log("hello from app.js")

// wrap in initializer function? document.ready

const additionalOptionsButton = document.querySelector('#additionalOptionsButton')
const additionalOptionsList = document.querySelector('#additionalOptionsList')
const chevron = document.querySelector('.icon.icon-chevron-down')
const downPayment = document.getElementById("downPayment")
const hamburger = document.getElementById("hamburger")
const hoaInput = document.querySelector('#hoaInput')
const hoaValue = document.querySelector('#hoaValue')
const homeInsurance = document.querySelector('#homeInsuranceInput')
const homeInsuranceValue = document.querySelector('#homeInsuranceValue')
const homePrice = document.getElementById("homePrice")
const interestRate = document.getElementById("interestRate")
const loanDuration = document.getElementById("loanDuration")
const menu = document.getElementById("menu")
const percentage = document.querySelector('#percentage')
const pmi = document.querySelector('#mortgageInsuranceInput')
const pmiValue = document.querySelector('#mortgageInsuranceValue')
const propertyTaxInput = document.querySelector('#propertyTaxInput')
const propertyTaxValue = document.querySelector('#propertyTaxValue')
const result = document.querySelector('#monthlyPayment>.first-bg-plate>.rhombus.step2>#result')



additionalOptionsButton.addEventListener('click', function(){
    additionalOptionsList.classList.toggle('is-active')
    chevron.classList.toggle('rotate-180')
})
downPayment.addEventListener('change', function() {
    percentage.value = ((downPayment.value / homePrice.value) * 100).toFixed(1);
    calculate();
})
hamburger.addEventListener('click', function(){
    menu.classList.toggle("active")
})
hoaInput.addEventListener('change', function(){
    calculate();
})
homeInsurance.addEventListener('change', function(){
    calculate();
})
homePrice.addEventListener('change', function(){
    downPayment.value = (homePrice.value * (percentage.value/100)).toFixed(0);
    calculate();
})
interestRate.addEventListener('change', function(){
    calculate();
})
loanDuration.addEventListener('change', function(){
    calculate();
})
percentage.addEventListener('change', function(){
    downPayment.value = (homePrice.value * (percentage.value/100)).toFixed(0);
    calculate();
})
pmi.addEventListener('change', function(){
    calculate();
})
propertyTaxInput.addEventListener('change', function(){
    calculate();
})


setDefaultValues();
calculate();



function calculate() {

    var validation = document.getElementById("validation")
    if (homePrice.value=="" || downPayment.value=="" || interestRate.value=="" || loanDuration.value==0)
    {
        validation.style.color = "red";
        validation.innerText = "Fields cannot be left blank"
        return;
    }
    if (parseFloat(homePrice.value) < parseFloat(downPayment.value)){
        validation.style.color = "red";
        validation.innerText = "How your down payment greater than the home price ???"
    }


    var principalPlusInterestValue = document.getElementById("principalPlusInterestValue")
    // Monthly Payment = Principal * [ (i/12mo)(i + 1)^LD]/[(1 + i)^n - 1]
    let monthlyInterest = (interestRate.value/100)/12
    let loanDurationInMonths = loanDuration.value*12
    let loanAmount = homePrice.value - downPayment.value
    var principalPlusInterest = loanAmount * ((monthlyInterest*(monthlyInterest + 1)**loanDurationInMonths)/((monthlyInterest + 1)**(loanDurationInMonths) - 1));
    result.innerText = currencyFormat((principalPlusInterest + (((propertyTaxInput.value/100)/12)*homePrice.value) + (homeInsurance.value/12) + (pmi.value/12) + (hoaInput.value*1)).toFixed(2));
    principalPlusInterestValue.innerText = currencyFormat(principalPlusInterest.toFixed(2))
    propertyTaxValue.innerText = currencyFormat((((propertyTaxInput.value/100)/12)*homePrice.value).toFixed(2))
    pmiValue.innerText = currencyFormat((pmi.value/12).toFixed(2))
    homeInsuranceValue.innerText = currencyFormat((homeInsurance.value/12).toFixed(2))
    hoaValue.innerText = currencyFormat((hoaInput.value*1).toFixed(2))
    //console.log(hoaInput.value)
}

function currencyFormat(number){
    if(number==null) return;
    let formattedNumber = number.toString().split('');
    let numberOfDigits = formattedNumber.length - 3; //subtract ".00"
    let numberOfCommas = Math.floor(numberOfDigits / 3);
    numberOfCommas = numberOfDigits % 3 == 0 ? numberOfCommas - 1 : numberOfCommas; // comma may not be necessary
    if (numberOfDigits <= 3) return '$' + number;
    switch (numberOfCommas){
        case 0:
            return '$' + formattedNumber.join('');
        case 1:
            formattedNumber.splice(1, 0, ',');
            return '$' + formattedNumber.join('');
            
        case 2:
            formattedNumber.splice(1, 0, ',')
            formattedNumber.splice(5, 0, ',')
            return '$' + formattedNumber.join('');
        case 3:
            formattedNumber.splice(1, 0, ',')
            formattedNumber.splice(5, 0, ',')
            formattedNumber.splice(5, 0, ',')
            return '$' + formattedNumber.join('');
        default:
            return;
    }
}

function setDefaultValues(){
    homePrice.defaultValue = 300000;
    downPayment.defaultValue = 60000;
    percentage.defaultValue = 20;
    interestRate.defaultValue = 6.02; // set to national average
    loanDuration.defaultValue = 30;

    //additional options
    propertyTaxInput.defaultValue = 1.5;
    homeInsurance.defaultValue = 1400;
    pmi.defaultValue = 0.0007*300000;
    hoaInput.defaultValue = 50;
}
