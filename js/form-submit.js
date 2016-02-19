$('#submit-form').click(function(event) {
	event.preventDefault();
	var $user = $('#user').val();
	var $message = $('#message').val();
	var user = document.getElementById('user');
	var message = document.getElementById('message');
	if( $user !== "" && $message !== "") {
		alert('Message has been sent!');
	} else if( $user === "" && $message === "") {
		alert('Both fields need to be field out');
	} else if( $user === "") {
		alert('Please select a person');
	} else {
		alert('Please include a message');
	};
	user.value = "";
	message.value = "";
});
