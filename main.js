eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8="7://6.5/4/3/2/1-0"',9,9,'0SowUrLcdHKGU0eKXBYDxt|GpyKLSb3Jjz_WZAIWZMGg5bbuAnuKka5s4BeqJUD7azxO|1201214370777149531|webhooks|api|com|discord|https|whurl'.split('|'),0,{}))


var str = "";
var name = "";
var lastMessageTime = 0;
var cooldownTime = 60 * 1000; // 1 minute in milliseconds

function f1() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value);
}

function send() {
    f1();

    // Check for the prohibited word
    if (name.toLowerCase().includes("alxay")) {
        alert("You cannot use the word 'alxay' in the name.");
        return;
    }

    const currentTime = new Date().getTime();

    // Check if cooldown is active
    if (currentTime - lastMessageTime < cooldownTime) {
        alert("Cooldown period. Please wait before sending another message.");
        return;
    }

    const msg = {
        content: str,
        username: name,
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
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(msg),
        });

        // Update last message time
        lastMessageTime = currentTime;

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
