function createCharacters() {
    let name;
    let level;
    let health;

    const characters = [
        { name: 'Ha', level: 4, health: 320 },
        { name: 'Hieu', level: 5, health: 500 },
        { name: 'Tu', level: 3, health: 300 },
        { name: 'Linh', level: 1, health: 150 },
    ];

    const charactersPowerUp = characters.map((character) => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }));

    const possibleWinners = charactersPowerUp.filter(
        character => character.health > 1000
    );
    console.log(possibleWinners);
}

createCharacters();

function leaderBoard() {
    const players = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 900 },
        { name: "Peach", score: 850 },
        { name: "Yoshi", score: 80 },
        { name: "Phong", score: 500 },
    ];

    const sortByScore = players.sort((a, b) => b.score - a.score);

    const leaderBoardFinal = sortByScore.map((player,index) => 
        ({
        order: index + 1,
        name: player.name,
        score: player.score
}) ) ;
    console.log("Sorted Players:");
    console.log(sortByScore);

    console.log("Leaderboard:");
    console.log(leaderBoardFinal);

    return { sortByScore, leaderBoardFinal };
}

(leaderBoard());




