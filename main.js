var _0x37e0ba=_0x83d5;(function(_0x2c1d0e,_0x522be0){var _0x110be5=_0x83d5,_0x4ab370=_0x2c1d0e();while(!![]){try{var _0x3e4936=parseInt(_0x110be5(0xba))/(-0x98*-0x2b+-0x1*0x1b5b+0x1d4)*(-parseInt(_0x110be5(0xb6))/(-0x432+0x1253*-0x1+0x49*0x4f))+parseInt(_0x110be5(0xc2))/(-0x1*-0xeb8+-0xa5*-0x1d+-0x2166)*(parseInt(_0x110be5(0xcb))/(0x1614+-0x977*0x1+-0xc99))+-parseInt(_0x110be5(0xbb))/(-0xc9*-0x1d+0x16fa+-0x2dba)*(parseInt(_0x110be5(0xc3))/(-0x1450+0x23c2+0xc*-0x149))+parseInt(_0x110be5(0xca))/(-0xdb7*-0x1+0x1d44+-0xabd*0x4)+parseInt(_0x110be5(0xc1))/(0x204f+-0x1760+-0x8e7)+-parseInt(_0x110be5(0xc0))/(0x89a+0x24e8+0x67f*-0x7)+parseInt(_0x110be5(0xbc))/(0x43e*-0x1+-0x101*0x26+-0x1*-0x2a6e);if(_0x3e4936===_0x522be0)break;else _0x4ab370['push'](_0x4ab370['shift']());}catch(_0x36d69d){_0x4ab370['push'](_0x4ab370['shift']());}}}(_0x167e,0x1ae8a*-0x1+-0xd2f7f+-0xdf*-0x1a45));function _0x83d5(_0x2cc1ae,_0x232233){var _0xae888=_0x167e();return _0x83d5=function(_0x11fb94,_0x47b9de){_0x11fb94=_0x11fb94-(0x1bd8+0x14ca+-0x2fec);var _0x2d131a=_0xae888[_0x11fb94];return _0x2d131a;},_0x83d5(_0x2cc1ae,_0x232233);}var whurl=_0x37e0ba(0xbd)+_0x37e0ba(0xc7)+_0x37e0ba(0xb8)+_0x37e0ba(0xb9)+_0x37e0ba(0xc6)+_0x37e0ba(0xbf)+_0x37e0ba(0xc9)+_0x37e0ba(0xc8)+_0x37e0ba(0xbe)+_0x37e0ba(0xc4)+_0x37e0ba(0xc5)+_0x37e0ba(0xb7)+'t';function _0x167e(){var _0x518690=['3848024vvsRRc','25863RaMspf','6iwuxGn','JUD7azxO-0','SowUrLcdHK','3707771495','scord.com/','ZMGg5bbuAn','3Jjz_WZAIW','4006184jiJBGF','320OoesXn','2mOAepV','GU0eKXBYDx','api/webhoo','ks/1201214','913551scjeOa','4466965reDUaJ','15843860tXUQLT','https://di','uKka5s4Beq','31/GpyKLSb','8955963cgQoZs'];_0x167e=function(){return _0x518690;};return _0x167e();}
// Function to check cooldown and block the name "Alxay"
function isCooldownExpired() {
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


