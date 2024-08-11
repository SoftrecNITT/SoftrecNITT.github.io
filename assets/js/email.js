function send(){
    let name = document.getElementById("Name").value; 
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("Subject").value; 
    let message = document.getElementById("message").value;

    Email.send({
    SecureToken : "4108241f-83e3-41a7-8028-c220be6c3bdd",
    To : "franq7228@gmail.com",
    From :"carreonfrancisco75@gmail.com",
    Subject : "mail From Contact Form",
    Body : "name:" + name + "<br> Email:" + email + "<br/>Contact:" + contact + "<br/>Subject:" + subject + "<br/>message:" + message
}).then(
message => alert(message)
);
  }
//   smtp.elasticemail.com
// 2525
// anonmousrdp4@gmail.com
// 6C5CCA1C4903FADA87EE6DB115ECEAA228CC