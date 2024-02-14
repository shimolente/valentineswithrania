function sendMessage() {
    // You can replace the phone number with the recipient's number
    // and customize the message as needed
    let phoneNumber = "+6281339129712";
    let message = "I miss you <3, let's start our Valentine's date night";
    
    // Construct the WhatsApp message URL
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp message link in a new tab
    window.open(whatsappURL, '_blank');
}

function gameStart(){
    window.open('menu.html','_blank');
}



document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const audioButton = document.getElementById('audioButton');

    backgroundMusic.volume = 0.3;

    audioButton.addEventListener('click', function() {
        toggleAudio(backgroundMusic, audioButton);
    });

    // Mute the audio by default
    backgroundMusic.muted = true;
    audioButton.innerHTML = '🔇'; // Set the initial icon

    // Enable audio on user interaction (e.g., click)
    document.addEventListener('click', function() {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            backgroundMusic.play().catch(function(error) {
                console.error('Error playing audio:', error);
            });
        }
    });
});


function toggleAudio(backgroundMusic, audioButton) {
    // Toggle between playing and paused states
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });
        audioButton.innerHTML = '🔊'; // Change the icon to indicate playing
    } else {
        backgroundMusic.pause();
        audioButton.innerHTML = '🔇'; // Change the icon to indicate paused
    }
}
