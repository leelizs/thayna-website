const cards = [
    {
        "titleAnime": "Boku no Hero -",
        "image": "https://upload.wikimedia.org/wikipedia/pt/5/5a/Boku_no_Hero_Academia_Volume_1.png",
    },
    {
        "titleAnime": "Boku no Hero -",
        "image": "https://upload.wikimedia.org/wikipedia/pt/5/5a/Boku_no_Hero_Academia_Volume_1.png",
    },
    {
        "titleAnime": "Boku no Hero -",
        "image": "https://upload.wikimedia.org/wikipedia/pt/5/5a/Boku_no_Hero_Academia_Volume_1.png",
    },
    {
        "titleAnime": "Boku no Hero -",
        "image": "https://upload.wikimedia.org/wikipedia/pt/5/5a/Boku_no_Hero_Academia_Volume_1.png",
    },
    {
        "titleAnime": "Boku no Hero -",
        "image": "https://upload.wikimedia.org/wikipedia/pt/5/5a/Boku_no_Hero_Academia_Volume_1.png",
    }
];

const cardAnime = document.querySelector('#cards');

cards.forEach(cards => {
    cardAnime.innerHTML += `
                <div class="container-card">
                    <div class="card">
                        <img class="image-card"
                            src="${cards.image}">
                        <div class="card-selection">
                        </div>
                    </div>
                    <h3 class="title-anime">${cards.titleAnime}</h3>
                </div>
    `
});