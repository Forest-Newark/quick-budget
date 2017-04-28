$(document).ready(function() {

let income = localStorage.getItem("userIncome")

const housing = document.getElementById('housingAmount');
housing.value = (income * 0.25);

const utility = document.getElementById('utilityAmount');
utility.value = (income *0.10);

const transportation = document.getElementById('transportationAmount');
transportation.value = (income * 0.10);


const healthCare = document.getElementById('healthCareAmount');
healthCare.value = (income * 0.10);

const food = document.getElementById('foodAmount');
food.value = (income * 0.10);

const investment = document.getElementById('investmentAmount');
investment.value = (income * 0.15);

const debt = document.getElementById('debtAmount');
debt.value = (income * 0.05);

const charity = document.getElementById('charityAmount');
charity.value = (income * 0.10);

const entertainment = document.getElementById('entertainmentAmount');
entertainment.value = (income * 0.05);

});
