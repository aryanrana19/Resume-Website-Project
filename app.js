const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-list ul');
const menu_item = document.querySelectorAll('.nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


angular.module('validationApp', [])
    .controller('mainController', function($scope) {
        $scope.submitForm = function() {
            if ($scope.userForm.$valid) {
                alert('Form is submitted!');
            } else {
                alert('Form is not valid!');
            }
        };
    });

function updateTime() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	
	hours = hours % 12;
	hours = hours ? hours : 12; 
	
	hours = (hours < 10 ? '0' : '') + hours;
	minutes = (minutes < 10 ? '0' : '') + minutes;
	seconds = (seconds < 10 ? '0' : '') + seconds;
	
	var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
	
	document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();