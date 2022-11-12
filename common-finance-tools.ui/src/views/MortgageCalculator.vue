<template>
  <div id="mortgage-calculator">
        <div id="validation"></div>
        <div class="label-input">
            <label for="homePrice">Home Price: </label>
            <div class="flex align-items-center">$<input id="homePrice" class="ml-1 fs-4" type="number" min="0" step="100"/></div>
        </div>
        <div class="label-input">
            <label for="downPayment">Down Payment: </label>
            <div class="flex align-items-center">
                <span>$</span><input id="downPayment" class="ml-1 fs-3" type="number" min="0" step="100"/>
                <input id="percentage" class="mr-1 fs-3" type="number" style="width:20%;"/><span>%</span>
            </div>
        </div>
        <div class="label-input">
            <label for="interestRate">Interest Rate:</label>
            <div class="flex align-items-center"><input id="interestRate" class="mr-1 fs-3" type="number"/><span>%</span></div>
        </div>
        <div class="label-input">
            <label></label>
            <select id="loanDuration">
                <option value=0 >Select Loan Duration...</option>
                <option value=15>15-Yr</option>
                <option selected value=30>30-Yr</option>
            </select>
        </div>
        <div id="additionalOptions" class="flex flex-column justify-content-center my-2">
            <button id="additionalOptionsButton" type="button" class="dropdown">Additional Options (Insurance, HOA, Taxes, etc.)<span class="icon icon-chevron-down"></span></button>
            <div id="additionalOptionsList" class="px-2 py-3">
                <div class="label-input my-3">
                    <label for="propertyTaxInput" class="fs-2-5">Property Tax: </label>
                    <div class="flex align-items-center"><input id="propertyTaxInput" class="ml-2 flex-1" type="number"/><span>%</span></div>
                </div>
                <div class="label-input my-3">
                    <label for="homeInsuranceInput" class="fs-2-5">Home Insurance: </label>
                    <div class="flex align-items-center">$<input id="homeInsuranceInput" class="ml-2 flex-1" type="number">/yr.</div>
                </div>
                <div class="label-input my-3">
                    <label for="mortgageInsuranceInput" class="fs-2-5">Private Mortgage Insurance: </label>
                    <div class="flex align-items-center">$<input id="mortgageInsuranceInput" class="ml-2 flex-1" type="number">/yr.</div>
                </div>
                <div class="label-input my-3">
                    <label for="hoaInput" class="fs-2-5">Monthly HOA Fee: </label>
                    <div class="flex align-items-center">$<input id="hoaInput" class="ml-2 flex-1" type="number"></div>
                </div>
            </div>
        </div>        
        <div id="paymentBreakdown" class="px-4 py-3-5">
            <div id="principalPlusInterest" class="flex justify-content-between breakdown-item"><span class="fs-2-5">Principal + Interest: </span><span id="principalPlusInterestValue" class="fs-2-5">$ 0</span></div>
            <div id="propertyTax" class="flex justify-content-between breakdown-item"><span class="fs-2-5">Property Tax: </span><span id="propertyTaxValue" class="fs-2-5">$ 0</span></div>
            <div id="homeInsurance" class="flex justify-content-between breakdown-item"><span class="fs-2-5">Home Insurance: </span><span id="homeInsuranceValue" class="fs-2-5">$ 0</span></div>
            <div id="mortgageInsurance" class="flex justify-content-between breakdown-item"><span class="fs-2-5">PMI: </span><span id="mortgageInsuranceValue" class="fs-2-5">$ 0</span></div>
            <div id="hoa" class="flex justify-content-between breakdown-item"><span class="fs-2-5">Monthly HOA Fee: </span><span id="hoaValue" class="fs-2-5">$ 0</span></div>
        </div>
        <div id="monthlyPayment" class="">
            <div class="first-bg-plate">
                <div class="rhombus step2 flex justify-content-center align-items-center"><div id="result" class="mr-5"></div>                
            </div>
        </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
