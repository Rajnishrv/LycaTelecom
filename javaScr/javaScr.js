function sentEmail() {
    Email.send({
        SecureToken: "e426ef0b-94f8-44f7-8010-8010184eef51",
        To: 'rajnishkumar550443@gmail.com',
        From: "rajnishkumar550443@gmail.com",
        Subject: "This is the subject",
        Body: "Name: " + document.getElementById("name").value
             +"<br> Email: " + document.getElementById("email").value
             +"<br> Phone: " + document.getElementById("phone").value
             +"<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("message send")
    );
};