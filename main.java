public class Main {
    public static void main(String[] args) {
        String[] reviewers = {"JillDOE", "JerryGarcia", "Mittens41", "Tom Hanks"};
        String[] reviewType = {"P", "N", "", ""};
        int[] stars = {5, 2, 1, 4};
        String[] reviewDates = {"11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"};
        String[] reviews = {"Great Customer service Comfortable beds, Goregous View.",
   "I was Disappointed with the Lack of variety in the ammenties that the suites offered. I expected more from a 5 star hotel.",
    "I was very disappointed with the service I received. The staff was rude and unhelpful. I would not recommend this hotel to anyone.",
   "Helpful staff, clean rooms, and a great location. I would definitely stay here again."};   
        String[] reviewTitles = {"good customer service", "Poor Customer Service", "Dissapointed", "Nice Improvement"};

        for (int i = 0; i < reviews.length; i++) {
            String reviewCode = ""; //initialize empty string
            //check the type of reviewer and add appropriate class to the table
            if (reviewType[i].equals("P")) {
                reviewCode += "<table class = 'prime'>";
            } else if (reviewType[i].equals("N")) {
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
            System.out.println(reviewCode);
        }
    }

}