const fishConfig = [
    {
        type: "guppy",
        imgSrc: "public/3.png",
        speed: 0.8,
        minDepth: 0,
        maxDepth: 400,      // STOPS appearing after 300m
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
        speed: 2,
        minDepth: 300,
        maxDepth: null,     // null means it never stops appearing
        spawnWeight: 6,     // VERY RARE (6 vs 100)
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
        maxDepth: 550,      // Stops at 550
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
        maxDepth: 400,      // Stops at 400m
        spawnWeight: 55,    // Common
        lenMin: 3,
        lenMax: 3,
        scale: 1.3,
        scoreBonus: 10,
        effect: null
    },
    {
        type: "piranha",
        imgSrc: "public/7.png",
        speed: 2.2,
        minDepth: 100,
        maxDepth: 700,      // Stops at 400m
        spawnWeight: 70,    // Common
        lenMin: 2,
        lenMax: 2,
        scale: 1.6,
        scoreBonus: 9,
        effect: null
    },
    {
        type: "bass",
        imgSrc: "public/8.png",
        speed: 1.0,
        minDepth: 400,
        maxDepth: 800,      // Stops at 400m
        spawnWeight: 50,    // Common
        lenMin: 4,
        lenMax: 4,
        scale: 1.8,
        scoreBonus: 17,
        effect: null
    },     
    {
        type: "salmon",
        imgSrc: "public/9.png",
        speed: 1.3,
        minDepth: 350,
        maxDepth: 850,      // Stops at 400m
        spawnWeight: 60,    // Common
        lenMin: 4,
        lenMax: 5,
        scale: 2.0,
        scoreBonus: 19,
        effect: null
    },      
    {
        type: "barracuda",
        imgSrc: "public/10.png",
        speed: 1.5,
        minDepth: 200,
        maxDepth: 600,      
        spawnWeight: 45,    // Common
        lenMin: 5,
        lenMax: 5,
        scale: 2.3,
        scoreBonus: 16,
        effect: null
    },                
    {
        type: "tuna",
        imgSrc: "public/11.png",
        speed: 2.5,
        minDepth: 400,
        maxDepth: 1000,
        spawnWeight: 25,    // Uncommon
        lenMin: 3,
        lenMax: 5,
        scale: 3.0,
        scoreBonus: 22,
        effect: null
    },
    {
        type: "sunfish",
        imgSrc: "public/12.png",
        speed: 0.9,
        minDepth: 100,
        maxDepth: 800,
        spawnWeight: 12,
        lenMin: 6,
        lenMax: 7,
        scale: 6,
        scoreBonus: 25,
        effect: null
    },
    {
        type: "sunfish-x",
        imgSrc: "public/12-2.png",
        speed: 0.3,
        minDepth: 100,
        maxDepth: 800,
        spawnWeight: 1,
        lenMin: 3,
        lenMax: 3,
        scale: 6,
        scoreBonus: 47,
        effect: null
    },
    {
        type: "marlin",
        imgSrc: "public/13.png",
        speed: 3.2,
        minDepth: 800,
        maxDepth: 1500,
        spawnWeight: 18,
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
        minDepth: 950,
        maxDepth: null,
        spawnWeight: 18,    // Rare dangerous enemy
        lenMin: 7,
        lenMax: 8,
        scale: 5.5,
        scoreBonus: 75,
        effect: null
    },
    {
        type: "shark-damaged",
        imgSrc: "public/14-2.png",
        speed: 2.0,
        minDepth: 950,
        maxDepth: null,
        spawnWeight: 1,    // Rare dangerous enemy
        lenMin: 3,
        lenMax: 4,
        scale: 5.5,
        scoreBonus: 45,
        effect: null
    },
    {
        type: "hammer",
        imgSrc: "public/17.png",
        speed: 1.4,
        minDepth: 1600,
        maxDepth: null,
        spawnWeight: 17,    // Rare dangerous enemy
        lenMin: 9,
        lenMax: 10,
        scale: 5.3,
        scoreBonus: 88,
        effect: null
    },    
    {
        type: "hammer-damaged",
        imgSrc: "public/17-2.png",
        speed: 1.6,
        minDepth: 1600,
        maxDepth: null,
        spawnWeight: 1,    // Rare dangerous enemy
        lenMin: 4,
        lenMax: 6,
        scale: 5.3,
        scoreBonus: 64,
        effect: null
    },     
    {
        type: "xray",
        imgSrc: "public/2.png",
        speed: 3.7,
        minDepth: 600,
        maxDepth: 1200,
        spawnWeight: 40,    // Rare dangerous enemy
        lenMin: 1,
        lenMax: 1,
        scale: 1.5,
        scoreBonus: 25,
        effect: null
    },
    {
        type: "xray-faster",
        imgSrc: "public/2.png",
        speed: 4.5,
        minDepth: 1200,
        maxDepth: 2000,
        spawnWeight: 35,    // Rare dangerous enemy
        lenMin: 1,
        lenMax: 1,
        scale: 1.1,
        scoreBonus: 50,
        effect: null
    },
    {
        type: "whale",
        imgSrc: "public/15.png",
        speed: 0.5,
        minDepth: 1200,
        maxDepth: null,
        spawnWeight: 8,    // Very Rare Boss
        lenMin: 14,
        lenMax: 14,
        scale: 8.0,
        scoreBonus: 230,
        effect: null
    },
    {
        type: "jelly",
        imgSrc: "public/18.png",
        speed: 0.4,
        minDepth: 900,
        maxDepth: null,
        spawnWeight: 25,    // Very Rare Boss
        lenMin: 5,
        lenMax: 5,
        scale: 4,
        scoreBonus: 102,
        effect: null
    },
    {
        type: "jelly-small",
        imgSrc: "public/18.png",
        speed: 1.5,
        minDepth: 900,
        maxDepth: null,
        spawnWeight: 1,    // Very Rare Boss
        lenMin: 1,
        lenMax: 1,
        scale: 0.8,
        scoreBonus: 40,
        effect: null
    },    
  {
        type: "angler",
        imgSrc: "public/20.png",
        speed: 0.2,
        minDepth: 1200,
        maxDepth: null,
        spawnWeight: 8,    
        lenMin: 13,
        lenMax: 13,
        scale: 5.5,
        scoreBonus: 230,
        effect: null
    },
    {
        type: "skeleton",
        imgSrc: "public/1.png",
        speed: 0.2,
        minDepth: 1500,
        maxDepth: null,
        spawnWeight: 7,    
        lenMin: 14,
        lenMax: 14,
        scale: 5.5,
        scoreBonus: 347,
        effect: null
    }
];

const gameSettings = {
    initialSpawnRate: 2000, 
    minSpawnRate: 800,      
    depthIncreaseRate: 5,   
    pointsPerChar: 2
};