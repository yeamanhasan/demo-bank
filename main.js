//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

//deposit button handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositTaka = document.getElementById('depositAmount').value;
    const depositNum = parseFloat(depositTaka);

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNum = parseFloat(currentDeposit);
    // const totalDeposit = depositNum + currentDepositNum;

    // document.getElementById('currentDeposit').innerText = totalDeposit;

    updateSpanText('currentDeposit', depositNum);

    updateSpanText('currentBalance', depositNum);

    document.getElementById('depositAmount').value = '';
})
function updateSpanText(id, depositNum){
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const totalAmount = depositNum + currentNum;
    document.getElementById(id).innerText = totalAmount;
}