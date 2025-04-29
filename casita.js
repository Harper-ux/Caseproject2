function myFunction() {
    document.getElementById("demo").innerHTML = "Thank you for your submission!";
    document.getElementById("demo").style.color = "green";
    document.getElementById("demo").style.fontSize = "20px";
}

function clicked() {
    addEventListener("click", function() {
        document.getElementById("demo").innerHTML = "Thank you for your submission!";
        document.getElementById("demo").style.color = "green";
        document.getElementById("demo").style.fontSize = "20px";
    })
};
