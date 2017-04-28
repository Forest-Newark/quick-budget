function myFunction() {
    let income =  $('#income').val();
    localStorage.setItem("userIncome",income);
    location.href = "budgetView.html";
}
