function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}
function getBalance(id) {
    return parseFloat(document.getElementById(id).innerText);
}
function calculate(inputAmount, myBalance, locationBalance, id, locationTitle) {
    if (inputAmount < 0 || isNaN(inputAmount)) {
        alert('Invalid Donation Amount!');
    } 
    else if (myBalance < inputAmount) {
        alert("Insufficient balance! Please top up to proceed with your donation.");
    } 
    else {
        myModel.showModal();
        document.getElementById(id).innerText = (locationBalance + inputAmount).toFixed(2);
        document.getElementById('my-balance').innerText = (myBalance - inputAmount).toFixed(2);
        addToHistory(inputAmount, locationTitle);
    }
}

function addToHistory(inputAmount, locationTitle) {
    const historySec = document.getElementById('history-sec');
    const div = document.createElement('div');
    const now = new Date();
    const dateTimeString = now.toString();  
    div.classList.add('flex', 'flex-col', 'gap-5', 'mb-5', 'p-3', 'lg:p-10',  'border', 'rounded-xl');
    div.innerHTML = `
        <h5 class="lg:text-xl font-extrabold text-text-01">
            ${inputAmount} Taka donated to: ${locationTitle}
        </h5>
        <p class="text-text-02 bg-bg-light rounded-lg px-5 py-2"> Date : 
            ${dateTimeString}
        </p>
    `;
    historySec.prepend(div);
}
