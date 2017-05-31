
function submitted(){
var button = document.getElementById('submit');

	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var url = document.getElementById('website').value;
	var dob = document.getElementById('dob').value;
	alert(name+" "+email+" "+phone+" "+url+" "+dob);
}