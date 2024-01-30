var whurl="\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x32\x30\x31\x32\x31\x34\x33\x37\x30\x37\x37\x37\x31\x34\x39\x35\x33\x31\x2F\x47\x70\x79\x4B\x4C\x53\x62\x33\x4A\x6A\x7A\x5F\x57\x5A\x41\x49\x57\x5A\x4D\x47\x67\x35\x62\x62\x75\x41\x6E\x75\x4B\x6B\x61\x35\x73\x34\x42\x65\x71\x4A\x55\x44\x37\x61\x7A\x78\x4F\x2D\x30\x53\x6F\x77\x55\x72\x4C\x63\x64\x48\x4B\x47\x55\x30\x65\x4B\x58\x42\x59\x44\x78\x74";
    var lastSentTime = localStorage.getItem('lastSentTime');
    if (!lastSentTime) {
        return true;
    }
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - parseInt(lastSentTime);
    var cooldownTime = 1 * 60 * 1000; // 1 minute in milliseconds
    return elapsedTime >= cooldownTime;
}

function isNameAllowed(name) {
    return name.toLowerCase() !== 'alxay';
}

// Function to handle sending messages
function send() {
    var nameInput = document.getElementById('NameInput');
    var inputField = document.getElementById('InputField');
    var messageSent = document.getElementById('MessageSent');
    var messageFailed = document.getElementById('MessageFailed');

    if (!isCooldownExpired()) {
        alert('Cooldown! Please wait before sending the next message. (1 minute)');
        return;
    }

    var userName = nameInput.value.trim();
    if (!isNameAllowed(userName)) {
        alert('The name "Alxay" is not allowed!');
        return;
    }

    // Save the time of the last sent message
    localStorage.setItem('lastSentTime', new Date().getTime().toString());

    // Reset the form and display appropriate messages
    nameInput.value = '';
    inputField.value = '';
    showMessage(messageSent);

    // Other message handling logic
    // ...

    captureInputValues();
    // Additional logic for sending the message
    // ...
}

// Function to display messages with fade-out effect
function showMessage(element) {
    element.style.opacity = 1;
    setTimeout(function () {
        element.style.opacity = 0;
    }, 4000);
}

var str = "";
var name = "";

// Function to capture input values
function captureInputValues() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value);
}


