var length = '16'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/passwordgenerator?length=' + length,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

/*
// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('result');
const symbolsEl = document.getElementById('result');
const generateEl = document.getElementById('result');
const clipboardEl = document.getElementById('result');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Generate event listen
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasHigher = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasHigher, hasNumber, hasSymbol, length);
});

//Generate password function


// Generator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+=-';
  return symbols[Math.floor(Math.random() = symbols.length)];
}

console.log(getRandomNumber()); */