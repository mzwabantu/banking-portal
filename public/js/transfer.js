let from = document.querySelector('#from');
let to = document.querySelector('#to');
let transferForm = document.querySelector('#transferForm');
let paymentForm = document.querySelector('#paymentForm');
const errorDiv = document.querySelector('.error');
errorDiv.classList.add('d-none');

function validate(evt){
  evt.preventDefault();
  errorDiv.innerHTML = '';
  errorDiv.classList.add('d-none');

  if((from && to) && (from.value === to.value)) {
    errorDiv.classList.remove('d-none');
    errorDiv.innerHTML = 'You can not transfer to the same account!';
  } else if (evt.type === "submit") {
    if(transferForm) transferForm.submit();
    if(paymentForm) paymentForm.submit();

    document.querySelector('#msg').remove()
  }
}

to.addEventListener("change", validate);
from.addEventListener("change", validate);
transferForm.addEventListener('submit', validate)
paymentForm.addEventListener('submit', validate)
