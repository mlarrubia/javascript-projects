const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');




// Rules and close Event Handler
rulesBtn.addEventListener('click', () => {
    rules.classList.add('show');
})
closeBtn.addEventListener('click', () => {
    rules.classList.remove('show');
})