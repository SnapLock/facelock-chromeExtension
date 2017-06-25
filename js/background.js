var boii = true;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {

});

chrome.runtime.onMessage.addListener(function (request, sender, callback) {
    if (request.isFound) {
        if (boii) {
            createTab();
            boii = false;
        }

    }
    //takePicture();
    //getSiteCred();
});

function takePicture() {
    alert('hi');
}

function createTab() {

    var url;

    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function (tabs) {

        var tabId = tabs[0].id;
        setTimeout(function () {
            chrome.tabs.create({
                'url': 'https://cryptic-plateau-38792.herokuapp.com/face-auth',
                'active': true
            }, function () {
                setTimeout(function () {
                    chrome.tabs.update(tabId, {
                        'selected': true
                    });
                    chrome.runtime.sendMessage({
                        canGo: true
                    });
                    // #TODO: Add notifiation to say keep studying -Juan
                }, 8500);
            });
        }, 3000);

    });

}
