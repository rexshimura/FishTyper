const fishConfig = [
    {
        type: "guppy",          imgSrc: "public/3.png",
        speed: 0.8,             scale: 0.9,             scoreBonus: 0,
        minDepth: 0,            maxDepth: 300,          spawnWeight: 100,
        lenMin: 1,              lenMax: 1,              effect: null
    },
    {
        type: "g_guppy",        imgSrc: "public/4.png",
        speed: 2.0,             scale: 1.0,             scoreBonus: 150,
        minDepth: 300,          maxDepth: null,         spawnWeight: 6,
        lenMin: 1,              lenMax: 1,              effect: "gold"
    },
    {
        type: "puffer_thin",    imgSrc: "public/19.png",
        speed: 2.4,             scale: 1.2,             scoreBonus: 3,
        minDepth: 50,           maxDepth: 200,          spawnWeight: 0,
        lenMin: 1,              lenMax: 1,              effect: null
    },
    {
        type: "puffer",         imgSrc: "public/6.png",
        speed: 0.6,             scale: 1.2,             scoreBonus: 5,
        minDepth: 50,           maxDepth: 550,          spawnWeight: 35,
        lenMin: 2,              lenMax: 2,              effect: null
    },
    {
        type: "clownfish",      imgSrc: "public/5.png",
        speed: 0.7,             scale: 1.3,             scoreBonus: 10,
        minDepth: 80,           maxDepth: 400,          spawnWeight: 45,
        lenMin: 3,              lenMax: 3,              effect: null
    },
    {
        type: "reef",           imgSrc: "public/22.png",
        speed: 0.9,             scale: 2.8,             scoreBonus: 22,
        minDepth: 80,           maxDepth: 400,          spawnWeight: 30,
        lenMin: 4,              lenMax: 5,              effect: null
    },
    {
        type: "bass",           imgSrc: "public/8.png",
        speed: 1.0,             scale: 1.8,             scoreBonus: 17,
        minDepth: 400,          maxDepth: 800,          spawnWeight: 50,
        lenMin: 4,              lenMax: 4,              effect: null
    },
    {
        type: "salmon",         imgSrc: "public/9.png",
        speed: 1.3,             scale: 2.0,             scoreBonus: 19,
        minDepth: 350,          maxDepth: 850,          spawnWeight: 60,
        lenMin: 4,              lenMax: 5,              effect: null
    },
    {
        type: "barracuda",      imgSrc: "public/10.png",
        speed: 1.5,             scale: 2.3,             scoreBonus: 16,
        minDepth: 200,          maxDepth: 600,          spawnWeight: 45,
        lenMin: 5,              lenMax: 5,              effect: null
    },
    {
        type: "tuna",           imgSrc: "public/11.png",
        speed: 2.5,             scale: 3.0,             scoreBonus: 22,
        minDepth: 600,          maxDepth: 900,          spawnWeight: 25,
        lenMin: 3,              lenMax: 5,              effect: null
    },
    {
        type: "sunfish",        imgSrc: "public/12.png",
        speed: 0.9,             scale: 6.0,             scoreBonus: 25,
        minDepth: 100,          maxDepth: 800,          spawnWeight: 12,
        lenMin: 6,              lenMax: 7,              effect: null
    },
    {
        type: "sunfish-x",      imgSrc: "public/12-2.png",
        speed: 0.3,             scale: 6.0,             scoreBonus: 47,
        minDepth: 100,          maxDepth: 101,          spawnWeight: 0,
        lenMin: 3,              lenMax: 3,              effect: null
    },
    {
        type: "marlin",         imgSrc: "public/13.png",
        speed: 3.2,             scale: 3.2,             scoreBonus: 35,
        minDepth: 1000,         maxDepth: 1800,         spawnWeight: 18,
        lenMin: 4,              lenMax: 4,              effect: null
    },
    {
        type: "shark",          imgSrc: "public/14.png",
        speed: 0.5,             scale: 5.5,             scoreBonus: 75,
        minDepth: 950,          maxDepth: null,         spawnWeight: 18,
        lenMin: 7,              lenMax: 8,              effect: null
    },
    {
        type: "shark-damaged",  imgSrc: "public/14-2.png",
        speed: 1.5,             scale: 5.5,             scoreBonus: 45,
        minDepth: 950,          maxDepth: null,         spawnWeight: 0,
        lenMin: 3,              lenMax: 4,              effect: null
    },
    {
        type: "hammer",         imgSrc: "public/17.png",
        speed: 0.7,             scale: 5.3,             scoreBonus: 88,
        minDepth: 1600,         maxDepth: null,         spawnWeight: 17,
        lenMin: 9,              lenMax: 10,             effect: null
    },
    {
        type: "hammer-damaged", imgSrc: "public/17-2.png",
        speed: 1.6,             scale: 5.3,             scoreBonus: 64,
        minDepth: 1600,         maxDepth: null,         spawnWeight: 0,
        lenMin: 4,              lenMax: 6,              effect: null
    },
    {
        type: "xray",           imgSrc: "public/2.png",
        speed: 3.7,             scale: 1.5,             scoreBonus: 25,
        minDepth: 900,          maxDepth: 1200,         spawnWeight: 40,
        lenMin: 1,              lenMax: 1,              effect: null
    },
    {
        type: "xray-faster",    imgSrc: "public/2.png",
        speed: 8.0,             scale: 1.0,             scoreBonus: 50,
        minDepth: 2000,         maxDepth: 2500,         spawnWeight: 40,
        lenMin: 1,              lenMax: 1,              effect: null
    },
    {
        type: "piranha",        imgSrc: "public/7.png",
        speed: 4.5,             scale: 1.6,             scoreBonus: 79,
        minDepth: 1200,         maxDepth: 2000,         spawnWeight: 70,
        lenMin: 2,              lenMax: 2,              effect: null
    },
    {
        type: "whale",          imgSrc: "public/15.png",
        speed: 0.5,             scale: 8.0,             scoreBonus: 230,
        minDepth: 1200,         maxDepth: null,         spawnWeight: 8,
        lenMin: 14,             lenMax: 14,             effect: null
    },
    {
        type: "jelly",          imgSrc: "public/18.png",
        speed: 0.4,             scale: 4.0,             scoreBonus: 102,
        minDepth: 900,          maxDepth: null,         spawnWeight: 20,
        lenMin: 5,              lenMax: 5,              effect: null
    },
    {
        type: "jelly-small",    imgSrc: "public/18.png",
        speed: 1.5,             scale: 0.8,             scoreBonus: 40,
        minDepth: 900,          maxDepth: null,         spawnWeight: 0,
        lenMin: 1,              lenMax: 1,              effect: null
    },
    {
        type: "angler",         imgSrc: "public/20.png",
        speed: 0.2,             scale: 5.5,             scoreBonus: 230,
        minDepth: 1200,         maxDepth: null,         spawnWeight: 8,
        lenMin: 14,             lenMax: 14,             effect: null
    },
    {
        type: "skeleton",       imgSrc: "public/1.png",
        speed: 0.4,             scale: 5.5,             scoreBonus: 347,
        minDepth: 1500,         maxDepth: null,         spawnWeight: 6,
        lenMin: 13,             lenMax: 13,             effect: null
    },
    {
        type: "skeleton-2",     imgSrc: "public/1-2.png",
        speed: 0.3,             scale: 5.5,             scoreBonus: 267,
        minDepth: 1500,         maxDepth: null,         spawnWeight: 1,
        lenMin: 10,             lenMax: 12,             effect: null
    },
    {
        type: "skeleton-3",     imgSrc: "public/1-3.png",
        speed: 0.1,             scale: 5.5,             scoreBonus: 332,
        minDepth: 1500,         maxDepth: null,         spawnWeight: 1,
        lenMin: 4,              lenMax: 6,              effect: null
    }
];

const gameSettings = {
    initialSpawnRate: 2000, 
    minSpawnRate: 800,      
    depthIncreaseRate: 5,   
    pointsPerChar: 2
};