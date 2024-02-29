eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8="7://6.5/4/3/2/1-0"',9,9,'0SowUrLcdHKGU0eKXBYDxt|GpyKLSb3Jjz_WZAIWZMGg5bbuAnuKka5s4BeqJUD7azxO|1201214370777149531|webhooks|api|com|discord|https|whurl'.split('|'),0,{}))

var str = "";
var name = "";
var lastMessageTime = 0;
var cooldownTime = 60 * 1000; // 1 minute in milliseconds
var linkRegex = /(?:https?|ftp):\/\/[\n\S]+/g; // Regular expression for matching links
var allowSending = true; // Variable to track whether the message can be sent

function f1() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value);

    // Reset the allowSending flag for each user input
    allowSending = true;

    // Check for specific special characters in the name field
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(name)) {
        alert("Name cannot contain special characters. Please use only letters and numbers.");
        allowSending = false;
    }
}

function containsLink(text) {
    return linkRegex.test(text);
}

function containsAttachment(text) {
    return /<attachment>/.test(text);
}

function send() {
    f1();

    // Check for the prohibited word in name or message
    if (name.toLowerCase().includes("alxay") || str.toLowerCase().includes("alxay")) {
        alert("You are not worthy to use 'alxay' in the name or message.");
        allowSending = false;
    }

    // Check for the prohibited word in name or message
    if (name.toLowerCase().includes("aixay") || str.toLowerCase().includes("alxay")) {
        alert("Nie tym razem");
        allowSending = false;
    }

    // Check if username contains "@"
    if (str.includes("@") || name.includes("@")) {
        alert("Username cannot contain '@'.");
        allowSending = false;
    }

    // Check if message contains a link
    if (containsLink(str)) {
        alert("Sending links is not allowed.");
        allowSending = false;
    }

    // Check if message contains an attachment
    if (containsAttachment(str)) {
        alert("Sending attachments is not allowed.");
        allowSending = false;
    }

    // Check if cooldown is active
    const currentTime = new Date().getTime();
    if (currentTime - lastMessageTime < cooldownTime) {
        alert("Cooldown! Please wait before sending another message.");
        allowSending = false;
    }

    // Check if the message is empty
    if (str.trim() === "") {
        alert("Message cannot be empty.");
        allowSending = false;
    }

    // Check if the message is a predefined value
    if (str === "predefinedValue1" || name === "predefinedValue2") {
        alert("Sending this predefined message is not allowed.");
        allowSending = false;
    }

    if (allowSending) {
        const msg = {
            content: str,
            username: name,
        };

        console.log(msg);

        try {
            fetch(whurl + "?wait=true", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(msg),
            }).then(response => {
                // Update last message time only if the message was successfully sent
                if (response.ok) {
                    lastMessageTime = currentTime;
                }

                document.getElementById("InputField").value = "";
                document.getElementById(response.ok ? "MessageSent" : "MessageFailed").style.opacity = 1;
                setTimeout(function () {
                    document.getElementById(response.ok ? "MessageSent" : "MessageFailed").style.opacity = 0;
                }, 4000);
            });
        } catch (e) {
            document.getElementById("MessageFailed").style.opacity = 1;
            setTimeout(function () {
                document.getElementById("MessageFailed").style.opacity = 0;
            }, 4000);
        }
    }
}
