

addEventListener.onclick = function() {
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
    };

    try { //ERROR HANDLING 
        // Simulate a review button click
        const reviewButton = document.getElementById('review-button');
        reviewButton.click();
    } catch (error) { // Catch any errors that occur during the PROGRAM execution
        console.error('Error simulating review button click:', error);
    }