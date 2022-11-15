function check(form) {
		members = new Array("Jacob", "members", "Marion", "Daffodil");

    username = new Array("admin", "moderator");
    password = new Array("admin", "moderator", "1234");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('https://github.com/KishonShrill/ApplyingMyKnowledge')/* The Administrator and Moderator homepage */
	}
	else if( members.includes(form.userid.value) && form.pswrd.value == password[2]) {
		location.replace('main/index.html')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		if (form.userid.value == "" || form.pswrd.value == "") {
			return
		} else {
			alert("Incorrect Username and Password")
		}
	}
}