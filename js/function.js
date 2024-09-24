
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationSec = document.getElementById('donation-sec');
const historySec = document.getElementById('history-sec');
const noakhaliBtn = document.getElementById('noakhali-btn');
const feniBtn = document.getElementById('feni-btn');
const quotaBtn = document.getElementById('quota-btn');
const myModel = document.getElementById('my_modal');
const footer = document.getElementById('footer');

donationBtn.addEventListener('click', function() {
    donationBtn.classList.add('bg-bg-green', 'text-text-01');
    donationBtn.classList.remove('text-text-02');
    historyBtn.classList.remove('bg-bg-green', 'text-text-01');
    historyBtn.classList.add('text-text-02');
    donationSec.classList.remove("hidden");
    historySec.classList.add("hidden");
});

historyBtn.addEventListener('click', function() {
    historyBtn.classList.add('bg-bg-green', 'text-text-01');
    historyBtn.classList.remove('text-text-02');
    donationBtn.classList.remove('bg-bg-green', 'text-text-01');
    donationBtn.classList.add('text-text-02');
    historySec.classList.remove("hidden");
    donationSec.classList.add("hidden");
    footer.classList.add("hidden");
});
const handleDonation = (btnId, inputId, balanceId, titleId) => {
    const btn = document.getElementById(btnId);
    btn.addEventListener('click', function() {
        const myBalance = getBalance('my-balance');
        const inputAmount = getInputValue(inputId);
        const locationBalance = getBalance(balanceId);
        const locationTitle = document.getElementById(titleId).innerText;
        calculate(inputAmount, myBalance, locationBalance, balanceId, locationTitle);
    });
};

handleDonation('noakhali-btn', 'noakhali-input-value', 'noakhali-balance', 'noakhali-title');
handleDonation('feni-btn', 'feni-input-value', 'feni-balance', 'feni-title');
handleDonation('quota-btn', 'quota-input-value', 'quota-balance', 'quota-title');
