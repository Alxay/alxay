main.js
/*
whurl variable should be equal to your webhooks link!

On discord you create a webhook by going to 
the server settings and from there to the 
integrations tab, then click on webhooks and 
press new webhook. Then copy the link and paste it 
in the whurl variable.

Make sure to hide this link using https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
if someone takes this link they can send messages to you with this webhook so make sure to
hide this link!
*/
var whurl = "https://discord.com/api/webhooks/1196862773645279272/ZpZZ5pFq9MrHbzk0RQ8n9XunPH9sNFbvqmJgfDQpay4doTeImtppfrUL7oA8fvxa-Iy9";

// Funkcja sprawdzająca cooldown i blokująca nazwę "Alxay"
function isCooldownExpired() {
    var lastSentTime = localStorage.getItem('lastSentTime');
    if (!lastSentTime) {
        return true;
    }
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - parseInt(lastSentTime);
    var cooldownTime = 1 * 60 * 1000; // 1 minuta w milisekundach
    return elapsedTime >= cooldownTime;
}

function isNameAllowed(name) {
    return name.toLowerCase() !== 'alxay';
}

function send() {
    var nameInput = document.getElementById('NameInput');
    var inputField = document.getElementById('InputField');
    var messageSent = document.getElementById('MessageSent');
    var messageFailed = document.getElementById('MessageFailed');

    if (!isCooldownExpired()) {
        alert('Cooldown! Poczekaj przed wysłaniem następnej wiadomości! (1 minuta)');
        return;
    }

    var userName = nameInput.value.trim();
    if (!isNameAllowed(userName)) {
        alert('Nazwa Alxay nie jest dla ciebie dozwolona!');
        return;
    }

    // Zapisanie czasu ostatniego wysłania wiadomości
    localStorage.setItem('lastSentTime', new Date().getTime().toString());

    // Zresetowanie formularza i wyświetlenie odpowiednich komunikatów
    nameInput.value = '';
    inputField.value = '';
    messageSent.style.opacity = 1;
    setTimeout(function () {
        messageSent.style.opacity = 0;
    }, 4000);

    f1();
    const msg = {
        "content": str,
        "username": name
    };

    if (str == "") {
        document.getElementById("Message1").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("Message1").style.opacity = 0;
        }, 4000);
        console.log("ERROR");
        return;
    }

    try {
        fetch(whurl + "?wait=true", { "method": "POST", "headers": { "content-type": "application/json" }, "body": JSON.stringify(msg) });
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000);
    } catch (e) {
        document.getElementById("MessageFailed").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000);
    }
}

var str = "";
var name = "";

function f1() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value);
}
Contact.html
/*
whurl variable should be equal to your webhooks link!

On discord you create a webhook by going to 
the server settings and from there to the 
integrations tab, then click on webhooks and 
press new webhook. Then copy the link and paste it 
in the whurl variable.

Make sure to hide this link using https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
if someone takes this link they can send messages to you with this webhook so make sure to
hide this link!
*/
var whurl = "https://discord.com/api/webhooks/1196862773645279272/ZpZZ5pFq9MrHbzk0RQ8n9XunPH9sNFbvqmJgfDQpay4doTeImtppfrUL7oA8fvxa-Iy9";

// Funkcja sprawdzająca cooldown i blokująca nazwę "Alxay"
function isCooldownExpired() {
    var lastSentTime = localStorage.getItem('lastSentTime');
    if (!lastSentTime) {
        return true;
    }
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - parseInt(lastSentTime);
    var cooldownTime = 1 * 60 * 1000; // 1 minuta w milisekundach
    return elapsedTime >= cooldownTime;
}

function isNameAllowed(name) {
    return name.toLowerCase() !== 'alxay';
}

function send() {
    var nameInput = document.getElementById('NameInput');
    var inputField = document.getElementById('InputField');
    var messageSent = document.getElementById('MessageSent');
    var messageFailed = document.getElementById('MessageFailed');

    if (!isCooldownExpired()) {
        alert('Cooldown! Poczekaj przed wysłaniem następnej wiadomości! (1 minuta)');
        return;
    }

    var userName = nameInput.value.trim();
    if (!isNameAllowed(userName)) {
        alert('Nazwa Alxay nie jest dla ciebie dozwolona!');
        return;
    }

    // Zapisanie czasu ostatniego wysłania wiadomości
    localStorage.setItem('lastSentTime', new Date().getTime().toString());

    // Zresetowanie formularza i wyświetlenie odpowiednich komunikatów
    nameInput.value = '';
    inputField.value = '';
    messageSent.style.opacity = 1;
    setTimeout(function () {
        messageSent.style.opacity = 0;
    }, 4000);

    f1();
    const msg = {
        "content": str,
        "username": name
    };

    if (str == "") {
        document.getElementById("Message1").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("Message1").style.opacity = 0;
        }, 4000);
        console.log("ERROR");
        return;
    }

    try {
        fetch(whurl + "?wait=true", { "method": "POST", "headers": { "content-type": "application/json" }, "body": JSON.stringify(msg) });
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000);
    } catch (e) {
        document.getElementById("MessageFailed").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000);
    }
}

var str = "";
var name = "";

function f1() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value);
}