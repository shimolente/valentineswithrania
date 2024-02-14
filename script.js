function sendMessage() {
    // You can replace the phone number with the recipient's number
    // and customize the message as needed
    let phoneNumber = "+6281339129712";
    let message = "I miss you";
    
    // Construct the WhatsApp message URL
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open the WhatsApp message link in a new tab
    window.open(whatsappURL, '_blank');
}
