class Main {
    reviews() {
        let reviewers = ["JillDOE", "JerryGarcia", "Mittens41", "Tom Hanks"];
        let reviewType = ["P", "N", "", ""];
        let stars = [5, 2, 1, 4];
        let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
        let reviews = ["Great Customer service Comfortable beds, Goregous View.",
   "I was Disappointed with the Lack of variety in the ammenties that the suites offered. I expected more from a 5 star hotel.",
    "I was very disappointed with the service I received. The staff was rude and unhelpful. I would not recommend this hotel to anyone.",
   "Helpful staff, clean rooms, and a great location. I would definitely stay here again."];   
        let reviewTitles = ["good customer service", "Poor Customer Service", "Dissapointed", "Nice Improvement"];

        for (let i = 0; i < reviews.length; i++) {
            let reviewCode = ""; //initialize empty string
            //check the type of reviewer and add appropriate class to the table
            if (reviewType[i] === "P") {
                reviewCode += "<table class = 'prime'>";
            } else if (reviewType[i] === "N") {
                reviewCode += "<table class = 'new'>";
            } else {
                reviewCode += "<table>";
            }

            //add the reviews to the table 
            reviewCode += "<caption>" + reviewTitles[i] + "</caption>";
            reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
            reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
            reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
            reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
            reviewCode += "</table>";

            //insert the review code into the article element in the html 
            console.log(reviewCode);
        }
    }

}

function loadreview() {
   printReview(); // call the function to print the reviews
}
function printReview() {
    let main = new Main(); // create a new instance of the Main class
    main.reviews(); // call the reviews method to print the reviews
}
function starImages(stars) {
    let starCode = ""; //initialize empty string
    for (let i = 0; i < stars; i++) {
        starCode += "<img src='star.png' alt='star' class='star'>"; //add the star image to the string
    }
    return starCode; //return the string with the stars
}
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to validate email
    return re.test(String(email).toLowerCase()); // test the email against the regex
}




let submitButton = document.getElementById("Submit Review"); // submit button 
let pwd = document.getElementById("pwd"); // password field
let pwd2= document.getElementById("pwd2"); // password confirmation feild

submitButton.onclick("click", function(event) {
    event.preventDefault(); // prevent the form from submitting
    let email = document.getElementById("email").value; // get the email value from the form
    let review = document.getElementById("review").value; // get the review value from the form 
    let reviewTitle = document.getElementById("reviewTitle").value; // get the review title value from the form
    let emailValid = validateEmail(email); // validate the email    

});
