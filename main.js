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

    // Check if the name is blocked
    if (name.toLowerCase() === "alxay") {
        alter("You are not Alxay!");
        return;
    }

    // Check cooldown
    var currentTime = new Date().getTime();
    if (currentTime - lastMessageTime < 60000) { // 60000 milliseconds = 1 minute
        console.log("Cooldown: You can send a message only once per minute.");
        return;
    }

    const msg = {
        "content": str,
        "username": name
    };

    console.log(msg);

    if (str === "") {
        document.getElementById("Message1").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("Message1").style.opacity = 0;
        }, 4000);
        console.log("ERROR");
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
        document.getElementById("MessageSent").style.opacity = 1;

        // Update last message time
        lastMessageTime = currentTime;

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
