// Define constants
const COOLDOWN_TIME = 1 * 60 * 1000; // 1 minute in milliseconds
const whurl = 'https://discord.com/api/webhooks/1196862773645279272/ZpZZ5pFq9MrHbzk0RQ8n9XunPH9sNFbvqmJgfDQpay4doTeImtppfrUL7oA8fvxa-Iy9'; // Replace with your actual webhook URL

// Function to check if cooldown has expired
function isCooldownExpired() {
    const lastSentTime = localStorage.getItem('lastSentTime');
    if (!lastSentTime) {
        return true;
    }
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - parseInt(lastSentTime);
    return elapsedTime >= COOLDOWN_TIME;
}

// Function to check if the name is allowed
function isNameAllowed(name) {
    return name.toLowerCase() !== 'alxay';
}

// Function to fetch input values
function getInputValues() {
    const name = document.getElementById('NameInput').value.trim();
    const content = document.getElementById('InputField').value.trim();
    return { name, content };
}

// Function to handle sending messages
async function sendMessage() {
    const { name, content } = getInputValues();

    // Additional validation
    if (!content) {
        // Handle empty message content
        console.log('ERROR: Empty message content');
        return;
    }

    try {
        const response = await fetch(whurl + '?wait=true', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ content, username: name }),
        });

        // Handle response if needed
        console.log('Message sent successfully:', response);
    } catch (error) {
        // Handle fetch error
        console.error('Error sending message:', error);
    }
}

// Function to handle message sent
function handleMessageSent() {
    const messageSent = document.getElementById('MessageSent');
    messageSent.style.opacity = 1;
    setTimeout(() => {
        messageSent.style.opacity = 0;
    }, 4000);
}

// Main send function
async function send() {
    const nameInput = document.getElementById('NameInput');

    if (!isCooldownExpired()) {
        alert('Cooldown! Please wait before sending the next message (1 minute)');
        return;
    }

    const userName = nameInput.value.trim();
    if (!isNameAllowed(userName)) {
        alert('The name "Alxay" is not allowed!');
        return;
    }

    // Save the time of the last sent message
    localStorage.setItem('lastSentTime', new Date().getTime().toString());

    // Reset form and display appropriate messages
    nameInput.value = '';
    document.getElementById('InputField').value = '';
    await sendMessage(); // Wait for the sendMessage function to complete
    handleMessageSent();
}
