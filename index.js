function share() {
    console.log('AAAA');
    setImage();

    if (navigator.canShare) {
        const shareData = {
            title: 'test',
            url: 'https://www.google.com/'
        }

        navigator.share(shareData)
            .then(() => alert("Share was successful"))
            .catch((error) =>
                alert("Sharing failed" + error)
            );
    }
}

function init() {
    const button = document.getElementById('shareButton');
    button.addEventListener("click", share);
}

function setImage() {
    const img = document.querySelectorAll('meta[property=og\\:image]')[0];
    const value = Math.random() < 0.5
        ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBksqziEUqmY9ovuHYd2LGU_7EmRx8wsR_WEz3ACkApyf3rGDZBhtjwa_ZVQW4K9oL2uA&usqp=CAU'
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzt3IYxgnU1D9hJ8OZMZy8KqJLcPZpOT9-6HEfM1ZiEbahAn0h3oCN9Pl8_TowMZZpiY&usqp=CAU';

    console.log('value', value);

    img.setAttribute('content', value)
}

init();


