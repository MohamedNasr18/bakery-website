document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));

            link.classList.add('active');
        });
    });
});
function initMap() {
    // The location of the place you want to show
    var location = { lat: -34.397, lng: 150.644 };
    
    // Create a new map
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: location
    });
    
    // Add a marker
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }

  // Initialize the map when the window loads
  window.onload = initMap;
