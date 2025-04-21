

addEventListener.onclick = function() {
window.alert('Thank you for your feedback!');
    // Simulate a review button click
    const reviewButton = document.getElementById('review-button');
    reviewButton.click();
    // Simulate a review submission
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const reviewText = document.getElementById('review-text').value;
        console.log('Review submitted:', reviewText);
    });
    window.alert('Thank you for the review!');   
}
location.href = 'form.html'; // Redirect to the form page