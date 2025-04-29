const review = [];

function addContact(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;


    // clear previous messages
    messageDiv.innerHTML = "";
    contactlistDiv.innerHTML = "";
    // validation
    if (name === "" || phone === "" || message === "") {
        messageDiv.innerHTML = "<p class='error'>Please fill in all fields.</p>";
        return
    }

}
addContactBtn.addEventListener("click", addContact);
    // add contact to the list
    const contact = {
        name: name,
        phone: phone,
        message: message
    };

    // check if the contact already exists
    const existingContact = review.find(c => c.name === name && c.phone === phone);
    if (existingContact) {
        messageDiv.innerHTML = "<p class='error'>Contact already exists.</p>";
        return;
    }
    review.push(contact);
    console.log(review);
    // display the contact list
    displayContactList();
    // clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    messageDiv.innerHTML = "<p class='success'>Contact added successfully.</p>";
    // clear the message after 3 seconds
    setTimeout(() => {
        messageDiv.innerHTML = "";
    }, 3000);
