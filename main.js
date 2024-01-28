whurl = "https://discord.com/api/webhooks/1196862773645279272/ZpZZ5pFq9MrHbzk0RQ8n9XunPH9sNFbvqmJgfDQpay4doTeImtppfrUL7oA8fvxa-Iy9";
var str = "";
var name = "";
var lastMessageTime = 0;

function f1() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value);
}

function send() {
    f1();

    // Check if the name contains the blocked word
    if (name.toLowerCase().includes("alxay")) {
        alert("You are not allowed to use 'Alxay' in the name!");
        return;
    }

    // Check cooldown
    var currentTime = new Date().getTime();
    if (currentTime - lastMessageTime < 60000) { // 60000 milliseconds = 1 minute
        alert("Cooldown: You can send a message only once per minute.");
        return;
    }

    const msg = {
        "content": str,
        "username": name
    };

    console.log(msg);

    if (str === "") {
        alert("ERROR: Message cannot be empty!");
        return;
    }

    try {
        fetch(whurl + "?wait=true", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(msg)
        });

        document.getElementById("InputField").value = "";
        alert("Message Sent!");

        // Update last message time
        lastMessageTime = currentTime;

        setTimeout(function () {
            // You may want to remove this line if you don't want to display a message after successful send
            // alert("Message Sent!"); // Duplicate alert removed
        }, 4000);
    } catch (e) {
        alert("Failed to send message!");

        setTimeout(function () {
            alert("Failed to send message!");
        }, 4000);
    }
}
