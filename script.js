$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu,.outline').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.b').click(function(event){
        $('.header_burger,.header_menu,.outline').removeClass('active');
        $('body').removeClass('lock');
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
});

$('#orderDefine li a').on('click', function() {
		
    var order = $(this).prop('rel');
    
    $('#orderDefine li a.active').removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('active')) {
        $('.latest').removeClass('active');
        $('.popular').removeClass('active');
        $('.throwbacks').removeClass('active');
    }
    if (order == 'all') {
        $('.latest').toggleClass('active');
        $('.popular').removeClass('active');
        $('.throwbacks').removeClass('active');
    }
    if (order == 'popular') {
        $('.popular').toggleClass('active');
        $('.latest').removeClass('active');
        $('.throwbacks').removeClass('active');
    }
    if (order == 'throwback') {
        $('.throwbacks').toggleClass('active');
        $('.latest').removeClass('active');
        $('.popular').removeClass('active');
    } 
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();

	
	if(usernameValue === '') {
		setErrorFor(username, 'Что-то пошло не так');
	} else {
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email не должен быть пуст');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Введите правильный email');
	} else {
		setSuccessFor(email);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
