let amount = document.querySelector('[data-amount]');
let interest = document.querySelector ('[data-interest]');
let btn= document.querySelector('[data-btn]');


function convert1() {
    let results = (parseFloat(amount.value)*1.15)
    interest.value = parseFloat(results.toFixed(2))
}

function convert2() {
    let results = (parseFloat(interest.value)/1.15) 
    amount.value = parseFloat(results.toFixed(2))
}



amount.addEventListener('input', convert1)
interest.addEventListener('input', convert2)
btn.addEventListener('click', function(){
    amount.value  = '';
    interest.value = '';
})