function sendmail() {
    // Prevent form submission
    event.preventDefault();

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_i5bkqcp"; // Update with your service ID
    const templateID = "template_54cvzhs"; // Update with your template ID
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log("Email sent successfully");
            alert("Message sent successfully");
        })
        .catch((err) => {
            console.log(err);
            alert("Failed to send message. Please try again.");
        });
}
