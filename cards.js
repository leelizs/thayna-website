const cards = [
    {
        "titleAnime": "Boku no Hero - Academia",
        "image": "https://upload.wikimedia.org/wikipedia/pt/5/5a/Boku_no_Hero_Academia_Volume_1.png",
        "link": "https://animesonlinecc.to/anime/boku-no-hero-academia/",
    }
];

const cardAnime = document.querySelector('#cards');

cards.forEach(cards => {
    cardAnime.innerHTML += `
                <div class="container-card">
                    <div class="card">
                   <a href="${cards.link}" target="_blank">
                        <img class="image-card"
                            src="${cards.image}"></a>
                        <div class="card-selection">
                        </div>
                    </div>
                    <h3 class="title-anime" title="Assistir!"><a 
                    href="${cards.link}" 
                    target="_blank">${cards.titleAnime}</a> </h3>
                </div>
    `
});