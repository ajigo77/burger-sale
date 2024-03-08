const sum = document.getElementById('sum');
const min = document.getElementById('min');
let textField = document.getElementById('text-field');
let number = 1;
textField.innerText = 1;

sum.addEventListener('click', function(){
    number++;
    textField.innerText = number;
});

min.addEventListener('click', function(){
    number--;
    textField.innerText = number;
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrollBtn = document.getElementById('scrollBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
