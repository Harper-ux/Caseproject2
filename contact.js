const Contact = [];

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
// add contact to the list
const contact = {
    name: name,
    phone: phone,
    message: message
};
addContactBtn.addEventListener("click", addContact);

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

    // display the contact list
    function displayContactList() {
        contactlistDiv.innerHTML = "<h2>Contact List</h2>";
        if (review.length === 0) {
            contactlistDiv.innerHTML += "<p>No contacts found.</p>";
            return;
        }
        review.forEach((contact, index) => {
            contactlistDiv.innerHTML += `<p>${index + 1}. ${contact.name} - ${contact.phone} - ${contact.message}</p>`;
        });
    }
let postalCode = document.getElementById("postalCode");


postalCode.onblur = function() {
    let codeValue = postalCode.value; // Get the value of the postal code input field
    let countryValue = country.value; // Get the value of the country input field
       
    place.value = "";
    region.value = "";
      
        fetch('https://api.zippopotam.us/us/' + codeValue) // Fetch data from the Zippopotam API using the postal code
          .then(response => {
            if (!response.ok) { // Check if the response is not OK (status code not in the range 200-299)
              throw new Error("Postal code not found"); // Throw an error if the postal code is not found
            }
            return response.json(); // Parse the response as JSON
          })
          .then(data => {
            place.value = data.places[0]['place name']; // Set the place input field with the place name from the API response
            region.value = data.places[0]['state abbreviation']; // Set the region input field with the state abbreviation from the API response
          })
          .catch(error => {
            console.error(error); // Log any errors to the console
            place.value = "Postal code not found"; // Set the place input field with an error message
            region.value = ""; // Clear the region input field
          });
      }