// Function to open Google Maps and let the user select their location
function shareLocation() {
    // Open Google Maps in a new window to select location
    const mapUrl = "https://www.google.com/maps/@?api=1&map_action=map&center=20.5937,78.9629&zoom=5"; // India as default center, you can change coordinates to your area
    window.open(mapUrl, "_blank", "width=800,height=600");
    
    // User selects location, coordinates will appear in the input field
    // Here, you would need to implement further logic for capturing coordinates after user interacts with Google Maps
}

// Capture donation form submission (to process the donation)
document.getElementById("donation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect form data
    const foodName = document.getElementById("food-name").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementById("location").value;
    
    // Send donation data to the server
    fetch('/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            foodName: foodName,
            quantity: quantity,
            location: location
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Donation successful! Points earned: ' + data.points);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
