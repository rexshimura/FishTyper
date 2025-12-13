const fishConfig = [
    {
        type: "guppy",
        imgSrc: "public/3.png",
        speed: 0.8,
        minDepth: 0,
        maxDepth: 300,      // STOPS appearing after 300m
        spawnWeight: 100,   // VERY COMMON
        lenMin: 1,
        lenMax: 1,
        scale: 0.9,
        scoreBonus: 0,
        effect: null
    },
    {
        type: "g_guppy",
        imgSrc: "public/4.png",
        speed: 1.5,
        minDepth: 150,
        maxDepth: null,     // null means it never stops appearing
        spawnWeight: 5,     // VERY RARE (5 vs 100)
        lenMin: 1,
        lenMax: 1,
        scale: 1.0,
        scoreBonus: 150,
        effect: "gold"
    },    
    {
        type: "puffer_thin",
        imgSrc: "public/19.png",
        speed: 2.4,
        minDepth: 50,
        maxDepth: 200,      // Stops at 400m
        spawnWeight: 1,    // Common
        lenMin: 1,
        lenMax: 1,
        scale: 1.2,
        scoreBonus: 3,
        effect: null
    },
    {
        type: "puffer",
        imgSrc: "public/6.png",
        speed: 0.6,
        minDepth: 50,
        maxDepth: 500,      // Stops at 400m
        spawnWeight: 70,    // Common
        lenMin: 2,
        lenMax: 2,
        scale: 1.2,
        scoreBonus: 5,
        effect: null
    },    
    {
        type: "clownfish",
        imgSrc: "public/5.png",
        speed: 0.7,
        minDepth: 80,
        maxDepth: 200,      // Stops at 400m
        spawnWeight: 50,    // Common
        lenMin: 2,
        lenMax: 2,
        scale: 1.3,
        scoreBonus: 5,
        effect: null
    },
    {
        type: "piranha",
        imgSrc: "public/7.png",
        speed: 2,
        minDepth: 100,
        maxDepth: 400,      // Stops at 400m
        spawnWeight: 80,    // Common
        lenMin: 3,
        lenMax: 3,
        scale: 1.6,
        scoreBonus: 9,
        effect: null
    },
    {
        type: "bass",
        imgSrc: "public/8.png",
        speed: 1.0,
        minDepth: 80,
        maxDepth: 400,      // Stops at 400m
        spawnWeight: 100,    // Common
        lenMin: 4,
        lenMax: 4,
        scale: 1.8,
        scoreBonus: 10,
        effect: null
    },     
    {
        type: "salmon",
        imgSrc: "public/9.png",
        speed: 1.3,
        minDepth: 90,
        maxDepth: 400,      // Stops at 400m
        spawnWeight: 100,    // Common
        lenMin: 4,
        lenMax: 5,
        scale: 2.0,
        scoreBonus: 12,
        effect: null
    },      
    {
        type: "barracuda",
        imgSrc: "public/10.png",
        speed: 1.5,
        minDepth: 170,
        maxDepth: 500,      
        spawnWeight: 100,    // Common
        lenMin: 5,
        lenMax: 5,
        scale: 2.3,
        scoreBonus: 12,
        effect: null
    },                
    {
        type: "tuna",
        imgSrc: "public/11.png",
        speed: 2.5,
        minDepth: 170,
        maxDepth: null,
        spawnWeight: 50,    // Uncommon
        lenMin: 3,
        lenMax: 5,
        scale: 3.0,
        scoreBonus: 15,
        effect: null
    },
    {
        type: "sunfish",
        imgSrc: "public/12.png",
        speed: 0.9,
        minDepth: 100,
        maxDepth: 500,
        spawnWeight: 10,
        lenMin: 6,
        lenMax: 6,
        scale: 6,
        scoreBonus: 20,
        effect: null
    },
    {
        type: "marlin",
        imgSrc: "public/13.png",
        speed: 3,
        minDepth: 380,
        maxDepth: null,
        spawnWeight: 50,
        lenMin: 4,
        lenMax: 4,
        scale: 3.2,
        scoreBonus: 35,
        effect: null
    },
    {
        type: "shark",
        imgSrc: "public/14.png",
        speed: 1.2,
        minDepth: 600,
        maxDepth: null,
        spawnWeight: 25,    // Rare dangerous enemy
        lenMin: 7,
        lenMax: 8,
        scale: 6,
        scoreBonus: 50,
        effect: null
    },
    {
        type: "xray",
        imgSrc: "public/2.png",
        speed: 4,
        minDepth: 500,
        maxDepth: null,
        spawnWeight: 40,    // Rare dangerous enemy
        lenMin: 1,
        lenMax: 1,
        scale: 1.5,
        scoreBonus: 25,
        effect: null
    },
    {
        type: "whale",
        imgSrc: "public/15.png",
        speed: 0.5,
        minDepth: 800,
        maxDepth: null,
        spawnWeight: 20,    // Very Rare Boss
        lenMin: 10,
        lenMax: 12,
        scale: 8.0,
        scoreBonus: 200,
        effect: null
    },
    {
        type: "jelly",
        imgSrc: "public/18.png",
        speed: 0.7,
        minDepth: 500,
        maxDepth: null,
        spawnWeight: 35,    // Very Rare Boss
        lenMin: 5,
        lenMax: 5,
        scale: 4,
        scoreBonus: 100,
        effect: null
    },
  {
        type: "angler",
        imgSrc: "public/20.png",
        speed: 0.2,
        minDepth: 710,
        maxDepth: null,
        spawnWeight: 35,    
        lenMin: 9,
        lenMax: 11,
        scale: 5.5,
        scoreBonus: 185,
        effect: null
    }
];

const gameSettings = {
    initialSpawnRate: 2000, 
    minSpawnRate: 800,      
    depthIncreaseRate: 5,   
    pointsPerChar: 2
};