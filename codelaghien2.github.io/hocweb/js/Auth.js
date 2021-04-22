// window.onload = function () {
// 	const email = sessionStorage.getItem('email');
// 	// console.log('email', email);
// 	if (!email || email === '') {
// 		window.location.replace('login.html');
// 	}
// 	if ($('#loginAs')) {
// 		$('#loginAs').html(email);
// 	}
// };


window.onload =  function (){
	const email =  sessionStorage.getItem('email');
	console.log(email)
	if (!email || email==='') {
		window.location.replace('login.html')
	}
// console.log('window.onload')

}