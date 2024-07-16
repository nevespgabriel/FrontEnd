games = [
    {
        title: "Donkey Kong Country 2: Diddy Kong's Quest",
        hasPlayed: true,
        stars: 5
    },
    {
        title: "Yakuza 0",
        hasPlayed: false,
    },
    {
        title: "Limbo",
        hasPlayed: true,
        stars: 3
    }
];

games.forEach((game) => {
    if(game.hasPlayed){
        console.log(`You have played ${game.title} and gave it ${game.stars} stars.`);
    } else{
        console.log(`You have not played ${game.title}.`);
    }
})