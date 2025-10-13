console.log("Script loaded");

function createGameList(games) {
    const gameListDiv = document.getElementById('game-list');

    games.forEach(game => {
        const gameEntry = document.createElement('div');
        gameEntry.className = 'game-entry';

        const gameLink = document.createElement('a');
        gameLink.href = game.url;
        gameLink.target = '_blank';
        gameLink.rel = 'noopener noreferrer';
        gameLink.textContent = game.name;

        const gameDesc = document.createElement('p');
        gameDesc.textContent = game.description;
        gameDesc.className = 'game-description';

        const gameImg = document.createElement('img');
        gameImg.src = game.image;
        gameImg.alt = `${game.name} screenshot`;
        gameImg.className = 'game-image';

        gameEntry.appendChild(gameLink);
        gameEntry.appendChild(gameDesc);
        gameListDiv.appendChild(gameEntry);
    });
}