const fishConfig = [
// ==================================================
// GOLD FISHES ( 350 - 500 )
// ==================================================

    {
        type: "gold_guppy",      imgSrc: "public/fishes/4.png",
        speed: 3,             scale: 1.0,             scoreBonus: 80,
        minDepth: 350,          maxDepth: 515,          spawnWeight: 100,
        lenMin: 2,              lenMax: 3,              effect: "gold"
    },
    {
        type: "gold_reef",      imgSrc: "public/fishes/22-g.png",
        speed: 2.6,             scale: 2.9,             scoreBonus: 120,
        minDepth: 350,          maxDepth: 500,          spawnWeight: 80,
        lenMin: 4,              lenMax: 5,              effect: "gold"
    },

// PART 2 1000 - 1300

    {
        type: "gold_salmon",    imgSrc: "public/fishes/9-g.png",
        speed: 2.0,             scale: 2.0,             scoreBonus: 160,
        minDepth: 1000,         maxDepth: 1300,         spawnWeight: 100,
        lenMin: 4,              lenMax: 4,              effect: "gold"
    },    
    {
        type: "gold_barracuda", imgSrc: "public/fishes/10-g.png",
        speed: 2.5,             scale: 2.3,             scoreBonus: 200,
        minDepth: 1000,         maxDepth: 1300,         spawnWeight: 80,
        lenMin: 5,              lenMax: 5,              effect: "gold"
    },

// PART 3 2400 - 2800

    {
        type: "gold_angel",     imgSrc: "public/fishes/23-g.png",
        speed: 3,               scale: 2.0,             scoreBonus: 230,
        minDepth: 2400,         maxDepth: 2800,         spawnWeight: 100,
        lenMin: 4,              lenMax: 4,              effect: "gold"
    },    
    {
        type: "gold_marlin",         imgSrc: "public/fishes/13-g.png",
        speed: 2.2,             scale: 3.2,             scoreBonus: 290,
        minDepth: 2400,         maxDepth: 2800,         spawnWeight: 80,
        lenMin: 6,              lenMax: 7,              effect: "gold"
    },   

// ==================================================
// SUNLIGHT ZONE | DEPTH ( 0 - 350 )
// ==================================================

    {
        type: "guppy",          imgSrc: "public/fishes/3.png",
        speed: 2.0,             scale: 0.9,             scoreBonus: 2,
        minDepth: 0,            maxDepth: 250,          spawnWeight: 100,
        lenMin: 1,              lenMax: 1,              effect: null
    },
    {
        type: "sardine",        imgSrc: "public/fishes/21.png",
        speed: 1.8,             scale: 0.9,             scoreBonus: 7,
        minDepth: 70,           maxDepth: 350,          spawnWeight: 70,
        lenMin: 3,              lenMax: 4,              effect: null
    },    
    {
        type: "puffer",         imgSrc: "public/fishes/6.png",
        speed: 0.6,             scale: 1.2,             scoreBonus: 8,
        minDepth: 50,           maxDepth: 300,          spawnWeight: 100,
        lenMin: 4,              lenMax: 4,              effect: null
    },
    {
        type: "puffer_thin",    imgSrc: "public/fishes/19.png",
        speed: 2.2,             scale: 1.2,             scoreBonus: 5,
        minDepth: 50,           maxDepth: 51,           spawnWeight: 0,
        lenMin: 3,              lenMax: 3,              effect: null
    },
    {
        type: "clownfish",      imgSrc: "public/fishes/5.png",
        speed: 1.7,             scale: 1.3,             scoreBonus: 8,
        minDepth: 30,           maxDepth: 350,          spawnWeight: 100,
        lenMin: 3,              lenMax: 3,              effect: null
    },    
    {
        type: "reef",           imgSrc: "public/fishes/22.png",
        speed: 0.9,             scale: 2.8,             scoreBonus: 12,
        minDepth: 80,           maxDepth: 355,          spawnWeight: 100,
        lenMin: 5,              lenMax: 6,              effect: null
    },    

// ==================================================
// TWILIGHT ZONE | DEPTH ( 500 - 1000 )
// ==================================================

    {
        type: "salmon",         imgSrc: "public/fishes/9.png",
        speed: 1.3,             scale: 2.0,             scoreBonus: 13,
        minDepth: 520,          maxDepth: 950,          spawnWeight: 100,
        lenMin: 4,              lenMax: 5,              effect: null
    },
    {
        type: "sunfish",        imgSrc: "public/fishes/12.png",
        speed: 0.3,             scale: 8,             scoreBonus: 20,
        minDepth: 555,          maxDepth: 995,          spawnWeight: 15,
        lenMin: 10,             lenMax: 10,             effect: null
    },
    {
        type: "sunfish-x",      imgSrc: "public/fishes/12-2.png",
        speed: 0.1,             scale: 8,               scoreBonus: 18,
        minDepth: 555,          maxDepth: 995,          spawnWeight: 0,
        lenMin: 6,              lenMax: 6,              effect: null
    },  
    {
        type: "bass",           imgSrc: "public/fishes/8.png",
        speed: 0.9,             scale: 1.8,             scoreBonus: 14,
        minDepth: 520,          maxDepth: 1000,         spawnWeight: 90,
        lenMin: 5,              lenMax: 5,              effect: null
    },          
    {
        type: "barracuda",      imgSrc: "public/fishes/10.png",
        speed: 1.5,             scale: 2.3,             scoreBonus: 16,
        minDepth: 600,          maxDepth: 1000,         spawnWeight: 80,
        lenMin: 7,              lenMax: 8,              effect: null
    },

// ==================================================
// MIDNIGHT ZONE | DEPTH ( 1300 - 2400 )
// ==================================================

    {
        type: "marlin",         imgSrc: "public/fishes/13.png",
        speed: 1.9,             scale: 3.2,             scoreBonus: 22,
        minDepth: 1650,         maxDepth: 2380,         spawnWeight: 30,
        lenMin: 11,             lenMax: 11,             effect: null
    },
    {
        type: "shark",          imgSrc: "public/fishes/14.png",
        speed: 0.5,             scale: 5.5,             scoreBonus: 35,
        minDepth: 1400,         maxDepth: 2200,         spawnWeight: 20,
        lenMin: 9,              lenMax: 10,              effect: null
    },    
    {
        type: "shark-damaged",  imgSrc: "public/fishes/14-2.png",
        speed: 1.2,             scale: 5.5,             scoreBonus: 25,
        minDepth: 1400,         maxDepth: 2200,         spawnWeight: 0,
        lenMin: 6,              lenMax: 6,              effect: null
    },
    {
        type: "angel",          imgSrc: "public/fishes/23.png",
        speed: 1.3,             scale: 2.0,             scoreBonus: 20,
        minDepth: 1350,         maxDepth: 2400,         spawnWeight: 90,
        lenMin: 4,              lenMax: 4,              effect: null
    },   
    {
        type: "tuna",           imgSrc: "public/fishes/11.png",
        speed: 1.1,             scale: 3.2,             scoreBonus: 22,
        minDepth: 1350,         maxDepth: 2400,         spawnWeight: 35,
        lenMin: 8,              lenMax: 8,              effect: null
    }, 

// ==================================================
// THE ABYSS | DEPTH ( 2800 - 4800 )
// ==================================================

    {
        type: "hammer",         imgSrc: "public/fishes/17.png",
        speed: 0.7,             scale: 5.3,             scoreBonus: 33,
        minDepth: 3000,         maxDepth: 4800,         spawnWeight: 17,
        lenMin: 10,              lenMax: 10,             effect: null
    },
    {
        type: "hammer-damaged", imgSrc: "public/fishes/17-2.png",
        speed: 1.6,             scale: 5.3,             scoreBonus: 28,
        minDepth: 3000,         maxDepth: 4800,         spawnWeight: 0,
        lenMin: 4,              lenMax: 5,              effect: null
    },   
    {
        type: "jelly",          imgSrc: "public/fishes/18.png",
        speed: 0.4,             scale: 4.5,             scoreBonus: 38,
        minDepth: 3300,         maxDepth: 4800,         spawnWeight: 20,
        lenMin: 8,              lenMax: 9,              effect: null
    },
    {
        type: "jelly-small",    imgSrc: "public/fishes/18-s.png",
        speed: 0.6,             scale: 1.8,             scoreBonus: 15,
        minDepth: 2815,         maxDepth: 4800,         spawnWeight: 50,
        lenMin: 4,              lenMax: 5,              effect: null
    },
    {
        type: "angler",         imgSrc: "public/fishes/20.png",
        speed: 0.6,             scale: 5.5,             scoreBonus: 50,
        minDepth: 3400,         maxDepth: 4900,         spawnWeight: 8,
        lenMin: 13,             lenMax: 15,             effect: null
    },
    {
        type: "whale",          imgSrc: "public/fishes/15.png",
        speed: 0.3,             scale: 8.0,             scoreBonus: 40,
        minDepth: 2815,         maxDepth: 3300,         spawnWeight: 8,
        lenMin: 18,             lenMax: 18,             effect: null
    },
    {
        type: "xray",           imgSrc: "public/fishes/2.png",
        speed: 2,               scale: 1.2,             scoreBonus: 25,
        minDepth: 2815,         maxDepth: 4000,         spawnWeight: 50,
        lenMin: 1,              lenMax: 2,              effect: null
    },
    {
        type: "piranha",        imgSrc: "public/fishes/7.png",
        speed: 1.6,             scale: 3,               scoreBonus: 33,
        minDepth: 3000,         maxDepth: 4800,         spawnWeight: 20,
        lenMin: 5,              lenMax: 7,              effect: null
    },
    {
        type: "bullfish",       imgSrc: "public/fishes/25.png",
        speed: 0.5,             scale: 2.6,             scoreBonus: 23,
        minDepth: 3000,         maxDepth: 4800,         spawnWeight: 20,
        lenMin: 4,              lenMax: 4,              effect: null
    },
    {
        type: "bullfish-angry", imgSrc: "public/fishes/25-2.png",
        speed: 1.6,             scale: 2.6,             scoreBonus: 23,
        minDepth: 3000,         maxDepth: 3001,         spawnWeight: 0,
        lenMin: 8,              lenMax: 8,              effect: null
    },

// ==================================================
// THE TRENCH | DEPTH ( 4800 - 5500 )
// ==================================================
    {
        type: "skeleton",       imgSrc: "public/fishes/1.png",
        speed: 0.4,             scale: 5.5,             scoreBonus: 347,
        minDepth: 4800,         maxDepth: 5500,         spawnWeight: 100,
        lenMin: 17,             lenMax: 13,             effect: null
    },
    {
        type: "skeleton-2",     imgSrc: "public/fishes/1-2.png",
        speed: 0.3,             scale: 5.5,             scoreBonus: 267,
        minDepth: 4800,         maxDepth: 4801,         spawnWeight: 0,
        lenMin: 16,             lenMax: 12,             effect: null
    },
    {
        type: "skeleton-3",     imgSrc: "public/fishes/1-3.png",
        speed: 0.1,             scale: 5.5,             scoreBonus: 332,
        minDepth: 4800,         maxDepth: 4801,         spawnWeight: 0,
        lenMin: 12,             lenMax: 14,             effect: null
    },
    // {
    //     type: "thing",          imgSrc: "public/fishes/24.png",
    //     speed: 0.3,             scale: 12,              scoreBonus: 332,
    //     minDepth: 4800,         maxDepth: 5500,         spawnWeight: 1,
    //     lenMin: 18,             lenMax: 18,             effect: null
    // },
    {
        type: "bone",           imgSrc: "public/fishes/24.png",
        speed: 0.3,             scale: 12,              scoreBonus: 332,
        minDepth: 4800,         maxDepth: 4900,         spawnWeight: 90,
        lenMin: 18,             lenMax: 18,             effect: null
    },
    {
        type: "bone-2",         imgSrc: "public/fishes/24-2.png",
        speed: 0.1,             scale: 12,              scoreBonus: 400,
        minDepth: 4800,         maxDepth: 4801,         spawnWeight: 0,
        lenMin: 18,             lenMax: 18,             effect: null
    },

// ==================================================
// THE MUTATED ZONE | DEPTH ( 5500 - ???? )
// ==================================================    
    {
        type: "crypoz",        imgSrc: "public/fishes/26.png",
        speed: 2.5,            scale: 3.0,             scoreBonus: 380,
        minDepth: 5500,        maxDepth: null,         spawnWeight: 100,
        lenMin: 6,             lenMax: 7,              effect: null
    },
    {
        type: "tripoz",        imgSrc: "public/fishes/28.png",
        speed: 0.3,            scale: 12.0,            scoreBonus: 780,
        minDepth: 5500,        maxDepth: null,         spawnWeight: 3,
        lenMin: 18,            lenMax: 18,             effect: null
    },
    {
        type: "tripoz-2",      imgSrc: "public/fishes/28-2.png",
        speed: 0.7,            scale: 12.0,            scoreBonus: 1244,
        minDepth: 5500,        maxDepth: 5501,         spawnWeight: 0,
        lenMin: 19,            lenMax: 19,             effect: null
    },    
    {
        type: "tripoz-3",        imgSrc: "public/fishes/28-3.png",
        speed: 0.2,            scale: 12.0,            scoreBonus: 2572,
        minDepth: 5500,        maxDepth: 5501,         spawnWeight: 0,
        lenMin: 20,            lenMax: 20,             effect: null
    },     
    {
        type: "cytoz",        imgSrc: "public/fishes/27.png",
        speed: 0.9,            scale: 8.0,             scoreBonus: 888,
        minDepth: 5500,        maxDepth: null,         spawnWeight: 30,
        lenMin: 16,            lenMax: 17,             effect: null
    },    
    {
        type: "krotoz",        imgSrc: "public/fishes/29.png",
        speed: 1.3,            scale: 5.0,            scoreBonus: 760,
        minDepth: 5500,        maxDepth: null,         spawnWeight: 70,
        lenMin: 11,            lenMax: 13,             effect: null
    },      

 ];

const gameSettings = {
    initialSpawnRate: 2000, 
    minSpawnRate: 800,      
    depthIncreaseRate: 5,   
    pointsPerChar: 2
};