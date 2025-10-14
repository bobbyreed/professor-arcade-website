import { GAMES } from '../games.js';

console.log("Game List script loaded");

const gameArray = Object.keys(GAMES).map(key => ({
    name: GAMES[key].title,
    author: GAMES[key].author,
    authorGithubURL: GAMES[key].authorGithubURL,
    description: GAMES[key].description,
    url: GAMES[key].url,
    coverImage: GAMES[key].coverImage,
    screenshot: GAMES[key].screenshot
}));

createGameList(gameArray);
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

        const authorLink = document.createElement('a');
        authorLink.href = `https://${game.authorGithubURL}`;
        authorLink.target = '_blank';
        authorLink.rel = 'noopener noreferrer';
        authorLink.textContent = game.author;

        const gameDesc = document.createElement('p');
        gameDesc.textContent = game.description;
        gameDesc.className = 'game-description';

        const gameImg = document.createElement('img');
        gameImg.src = game.coverImage;
        gameImg.alt = `${game.name} cover`;
        gameImg.className = 'game-cover-image';

        const gameSS = document.createElement('img');
        gameSS.src = game.screenshot;
        gameSS.alt = `${game.name} screenshot`;
        gameSS.className = 'game-screenshot';

        gameEntry.appendChild(gameLink);
        gameEntry.appendChild(authorLink);
        gameEntry.appendChild(gameDesc);
        gameEntry.appendChild(gameImg);
        gameEntry.appendChild(gameSS);
        gameListDiv.appendChild(gameEntry);
    });
}