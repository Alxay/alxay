eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8="7://6.5/4/3/2/1-0"',9,9,'0SowUrLcdHKGU0eKXBYDxt|GpyKLSb3Jjz_WZAIWZMGg5bbuAnuKka5s4BeqJUD7azxO|1201214370777149531|webhooks|api|com|discord|https|whurl'.split('|'),0,{}))

var str = "";
var name = "";
var lastMessageTime = 0;
var cooldownTime = 60 * 1000; // 1 minute in milliseconds
var linkRegex = /(?:https?|ftp):\/\/[\n\S]+/g; // Regular expression for matching links

// ... (previous code)

function send() {
    f1();

    // Check for the prohibited word in name or message
    if (name.toLowerCase().includes("alxay") || str.toLowerCase().includes("alxay")) {
        alert("You are not worthy to use 'alxay' in the name or message.");
        return;
    }

    // Check if username contains "@"
    if (name.includes("@")) {
        alert("Username cannot contain '@'.");
        return;
    }

    // Check if message contains a link
    if (containsLink(str)) {
        alert("Sending links is not allowed.");
        return;
    }

    // Check if message contains an attachment
    if (containsAttachment(str)) {
        alert("Sending attachments is not allowed.");
        return;
    }

    // Check if cooldown is active
    const currentTime = new Date().getTime();
    if (currentTime - lastMessageTime < cooldownTime) {
        alert("Cooldown! Please wait before sending another message.");
        return;
    }

    // Check if the message is empty
    if (str.trim() === "") {
        alert("Message cannot be empty.");
        return;
    }

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

