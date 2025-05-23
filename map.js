// Function to set up and display the Amarillo College Map
function initMap() {

    // Page objects
    let displayMap = document.getElementById("displayMap");
    let routeBox = document.getElementById("routeBox");

    // Create a map to the Amarillo College
    let amarillo = { lat: 35.199165, lng: -101.845276 };
    let casitaResort = { lat: 34.50342, lng:  -111.52063 };
    //35.2084696982248, -101.83021954609626
 
  // declare a varible to hold
    let myMap = new google.maps.Map(displayMap, {
       zoom: 11,
       center: casitaResort,
       fullscreenControl: false
    });
 
    
    //  // Add a marker for the Amarillo College
    new google.maps.Marker({
       position: amarillo,
       map: myMap,
       title: "Amarillo"
    });
 
     //  // Add a marker for the Resort
     new google.maps.Marker({
       position: casitaResort,
       map: myMap,
       title: "Casita Resort"
    });
 
    // Get the device's current position
    navigator.geolocation.getCurrentPosition(getPos, handleError);
 
    function getPos(pos) { //pos: is current position of the device: mobile/computer
       let myPosition = {
           lat: pos.coords.latitude,
           lng: pos.coords.longitude
 
          // lat: 35.208500379566146,
          // lng: -101.83029464803668
       }
 
       console.log(myPosition);
 
       // Set up direction service and rendering
       let routeFind = new google.maps.DirectionsService(); // find the routing
       let routeDraw = new google.maps.DirectionsRenderer(); // draw the routing
 
       // Drive from current location to Amarillo College
       let myRoute = {
          origin: casitaResort,
          destination: amarillo,
          travelMode: "DRIVING"
       }
 
       // Generate directions for the route
       routeFind.route(myRoute, function (result, status) {
          if (status == "OK") {
             routeDraw.setDirections(result);
             // Display route and directions
             routeDraw.setMap(myMap);
             routeDraw.setPanel(routeBox);
          } else {
             routeBox.textContent = "Directions Unavailable: " + status;
          }
       });
 
    }
 
    // In case of geolocation error
    function handleError(err) {
       console.log("Geolocation error: " + err.message);
    }
 }