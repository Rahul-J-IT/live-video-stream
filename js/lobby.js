let form = document.getElementById('lobby__form');

let displayName = sessionStorage.getItem('display_name');
if (displayName) {
    form.name.value = displayName; // Set the input value for the display name
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sessionStorage.setItem('display_name', e.target.name.value); // Store display name

    let inviteCode = e.target.room.value;
    if (!inviteCode) {
        inviteCode = String(Math.floor(Math.random() * 10000)); // Generate a random invite code if not provided
    }
    
    // Print the room URL to the console
   
    
    window.location = `room.html?room=${inviteCode}`; // Redirect to the room
});
