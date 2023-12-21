function share() {
    const node = document.getElementById('node');

    domtoimage.toBlob(node)
        .then(function (blob) {
            const file = new File([blob], "PrettyPicture.png", {
                type: "image/png"
            });
            const filesArray = [file];
            const shareData = { files: filesArray };

            if (navigator.canShare && navigator.canShare(shareData)) {
                navigator
                    .share(shareData)
                    .then(() => alert("Share was successful"))
                    .catch((error) =>
                        alert("Sharing failed" + error)
                    );
            } else if (window.AndroidShareHandler.share) {
                // shareData.url = 'https://portfolio.1inch.io/#/';
                window.AndroidShareHandler.share('https://portfolio.1inch.io/#/', filesArray)
                    .then(() => alert("Webview: Share was successful"))
                    .catch((error) =>
                        alert("Webview: Sharing failed" + error)
                    );
            } else {
                alert("Your system doesn't support sharing files");
            }


        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
}

function init() {
    const button = document.getElementById('shareButton');
    button.addEventListener("click", share);
}

init();


