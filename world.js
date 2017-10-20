'use strict';
let grass_light;
let grass_dark;
let water;
let shrub;
let weed;
let flower_yellow;
let jack;
let shell;
let lily;
let sand;
let worldSeed;
let grass_light_tile;
let grass_dark_tile;
let water_tile;
let shrub_tile;
let weed_tile;
let flower_yellow_tile;
let jack_tile;
let shell_tile;
let lily_tile;
let sand_tile;

function myPreload() {
    pixelDensity(1);
    grass_light = loadImage("grass.png");
    grass_dark = loadImage("grass_dark.png")
    water = loadImage("water.png");
    shrub = loadImage("tree.png");
    weed = loadImage("weed.png");
    flower_yellow = loadImage("flower_yellow.png");
    jack = loadImage("jack.png");
    shell = loadImage("shell.png");
    lily = loadImage("lily.png");
    sand = loadImage("sand.png");
}

function mySetup() {
    grass_light_tile = createGraphics(sprite_width, sprite_height);
    grass_dark_tile = createGraphics(sprite_width, sprite_height);
    water_tile = createGraphics(sprite_width, sprite_height);
    shrub_tile = createGraphics(sprite_width, sprite_height);
    weed_tile = createGraphics(sprite_width, sprite_height);
    flower_yellow_tile = createGraphics(sprite_width, sprite_height);
    jack_tile = createGraphics(sprite_width, sprite_height);
    shell_tile = createGraphics(sprite_width, sprite_height);
    lily_tile = createGraphics(sprite_width, sprite_height);
    sand_tile = createGraphics(sprite_width, sprite_height);
    grass_light_tile.image(grass_light,0,0);
    grass_dark_tile.image(grass_dark,0,0);
    water_tile.image(water,0,0);
    shrub_tile.image(shrub,0,0);
    weed_tile.image(weed,0,0);
    flower_yellow_tile.image(flower_yellow, 0, 0);
    jack_tile.image(jack, 0, 0);
    shell_tile.image(shell,0,0);
    lily_tile.image(lily,0,0);
    sand_tile.image(sand,0,0);
}

function myDraw() {
    background(64,0,64);
    noiseSeed(worldSeed);
}

function myTileHeight(i, j) {
    //return 5*sin(i/5.0)*sin(j/5.0);
    var n = 17 * noise(i * 0.06, j * 0.06)-6;
    //console.log(n);
    return (n > 0.4) ? n : 0.4;
}

function myTileVariation(i, j, height) {
    //console.log(height);
    if(height == 0.4){
        if(getClickCount(i,j)%2 == 1){
            return 1;
        }
        else{
            return 3;
        }
    }
    else if(height < 0.9){
        if(getClickCount(i,j)%2 == 1){
            return 2;
        }
        else{
            return 1;
        }
    }
    else if (height < 1.5){
        if(getClickCount(i,j)%2 == 1){
            return 1;
        }
        else{
            return 2;
        }
    }
    else{
        if(getClickCount(i,j)%2 == 1){
            return 2;
        }
        else{
            return 0;
        }
    }
}

function myDrawTile(i, j, variation) {
    if(variation == 1) {
        image(sand,0,0);
        let shell_noise = noise(i, j);
        if (shell_noise > 0.7){
            image(shell_tile,0,0);
        }
    }
    else if(variation == 3){
        let waves = noise(millis() * 0.0003) * 15;
        water_tile.tint(255, noise(millis() * 0.4) * 255);
        image(water_tile, waves, waves);
        let lily_spread = noise(i,j);
        if(lily_spread > 0.8){
            image(lily_tile,0,0);
        }
    }
    else if(variation == 2){
        image(grass_light_tile,0,0);
    }
    else{
        image(grass_dark_tile,0,0);
        let trees = noise(i, j);
        if(trees > 0.7){
            image(shrub_tile,0,0);
        }
        else if (trees > 0.5){
            image(weed_tile,0,0);
        }
        else if (trees > 0.48){
            image(flower_yellow_tile,0,0);
        }
        else if (trees > 0.478){
            image(jack_tile,0,0);
        }
    }
}

function myTileDescription(i,j, variation) {
    return "Variation: " + variation;
}

let clicks = {};

function myHandleClick(i, j) {
    clicks[[i,j]] = 1 + (clicks[[i,j]]|0);

}

function getClickCount(i, j) {
    return clicks[[i, j]]|0;
}

function myHandleWorldgenStringChange(key) {
    let hash = XXH.h32(key,0);
    worldSeed = hash.toNumber();
    noiseSeed(key);    
}

