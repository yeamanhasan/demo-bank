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
    const depositNum = getInputNumber('depositAmount');

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
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
const withdrawNum = getInputNumber('withdrawAmount');

updateSpanText('currentWithdraw', withdrawNum);
updateSpanText('currentBalance', -1 * withdrawNum);

document.getElementById('withdrawAmount').value = '';
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}