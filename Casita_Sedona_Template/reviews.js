function myFunction() {
    document.getElementById("demo").innerHTML = "Thank you for your submission!";
    document.getElementById("demo").style.color = "green";
    document.getElementById("demo").style.fontSize = "20px";
}

function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let review = document.forms["myForm"]["review"].value;
    if (name == "" || email == "" || review == "") {
        alert("All fields must be filled out");
        return false;
    }
    myFunction();
    return true;
}
let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
    "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
    "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
    "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
    "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

function starImages() {
    let imageText = "";
    for (let i = 0; i < stars.length; i++) {
        imageText += "<img src='images/star.png' alt='Star' />";
    }
    let reviewCode = "";
    for (let i = 0; i < reviewType.length; i++) {
        if (reviewType[i] == "P") {
            reviewCode += "<img src='images/thumbs-up.png' alt='Positive Review' />";
        }
        else if (reviewType[i] == "N") {
            reviewCode += "<img src='images/thumbs-down.png' alt='Negative Review' />";
        }
        else {
            reviewCode += "<img src='images/neutral.png' alt='Neutral Review' />";
        }
    }
    return imageText + reviewCode;
}
function displayReviews() {
    let reviewSection = document.getElementById("reviewSection");
    for (let i = 0; i < reviewers.length; i++) {
        let reviewHTML = `<div class="review">
            <h3>${reviewTitles[i]}</h3>
            <p><strong>${reviewers[i]}</strong> (${reviewDates[i]})</p>
            <p>${reviews[i]}</p>
            <div class="stars">${starImages()}</div>
            <p class="reviewType">${reviewType[i]}</p>
        </div>`;
        reviewSection.innerHTML += reviewHTML;
    }
    reviewSection.innerHTML += `<div class="reviewForm">
        <h3>Submit Your Review</h3>
        <form name="myForm" onsubmit="return validateForm()">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email"><br>
            <label for="review">Review:</label><br>
            <textarea id="review" name="review"></textarea><br><br>
            <input type="submit" value="Submit">
        </form>
        <p id="demo"></p>
    </div>`;
}
window.onload = function() {
    displayReviews();
};
