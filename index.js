function share() {
    const node = document.getElementById('node');

    domtoimage.toBlob(node)
        .then(function (blob) {
            const file = new File([blob], "PrettyPicture.png", {
                type: "image/png"
            });
            const filesArray = [file];
            let shareData = { files: filesArray };

            if (navigator.canShare && navigator.canShare(shareData)) {
                // shareData.text = "Смотри как я могу! Ты тоже так можешь тут";
                // shareData.url = "https://google.com";

                navigator
                    .share(shareData)
                    .then(() => alert("Share was successful"))
                    .catch((error) =>
                        alert("Sharing failed" + error)
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


