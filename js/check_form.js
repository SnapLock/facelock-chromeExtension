var email;
var password;

function submitForm(form) {
    // delays submit
    setTimeout(function () {
        form.form.submit();

        document.getElementById('loginbutton').submit();
    }, 4000);
}

function doThing() {

    setTimeout(function () {

        var email = 'facelock2659@outlook.com';
        var password = 'Csun2659';

        let form = findForm();
        document.getElementById('email').value = email;
        document.getElementById('pass').value = password;

        submitForm(form);
    }, 13000);
}

function getCookie(key) {
    var cookies = decodeURIComponent(document.cookie);
    var ca = cookies.split('; ');
    let ret = ca.filter(cookie => cookie.split('=')[0] === key);
    if (ret != null) {
        let splitRet = ret[0].split('=');
        return splitRet[splitRet.length - 1];
    } else {
        return null;
    }
}

function sendForm() {

}

function findForm() {
    let passwordFields = $(`input[type="password"]`);
    let foundFields = passwordFields.filter((index, field) => $(field).is(':visible'));
    if (foundFields != null && foundFields.length > 0) {
        let passwordField = foundFields[0];
        let usernameField;

        chrome.runtime.sendMessage({
            isFound: true
        });
        doThing();

        for (let i of passwordField.form) {
            if (
                i.tagName === 'INPUT' ||
                i.name.includes('name') ||
                i.name.includes('email')
            ) {
                usernameField = i;
                break;
            }
        }

        return {
            form: usernameField.form,
            username: usernameField,
            password: passwordField
        };

    } else {
        console.log('No password fields found');
        return;
    }
}

findForm();
