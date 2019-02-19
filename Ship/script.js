let planet;

// console.log(planets instanceof Planet)
class Ship {
    constructor(name, crew, fuel, hull, speed, img) {
        this.name = name;
        this.crew = crew;
        this.fuel = fuel;
        this.maxFuel = this.fuel;
        this.hull = hull;
        this.maxHull = this.hull;
        if (speed < 1 && speed > 0) {
            this.speed = speed;
        };
        this.credits = 500;
        this.img = img;
        this.isWorking = false;
        this.isDamaged = false;
        this.isDestroyed = false;
        this.docked = null;
    }
    start(planet) {
        // If planet is a planet
        if(planet instanceof Planet){
            console.log(true)
        } else {
            console.log(false)
        }
        // If ship is docked on planet
        // if(this.name === planet.shipsDocked[name]){

        // }
        // If ship is damaged, destroyed
        if(this.isDamaged === false || this.isDestroyed === false || this.crew < 1){
            console.log('Ship is not damaged, destroyed or without a crew')
        } else {
            console.log('ship is damaged')
        }
        // Is working
        if(this.isWorking === true){
            console.log('Ship is working!')
        } else {
            console.log('Ship is not working')
        }
        // Fuel
        if(this.fuel > (this.fuel - planet.distance * 20)){
            console.log('Ship has fuel')
        } else {
            console.log('Ship does not have enough fuel')
        }
        // Planet dock speed
        let travelTime = planet.distance * 1000 / this.speed
        setTimeout(()=>{
            console.log('Ship travelled to planet')
            this.dock(planet)
        },1000)
    }
    dock(planet){
        setTimeout(()=>{
            planet.shipsDocked.push(this);
            this.isWorking = false;
            this.docked = planet;
            console.log('Ship docked.')
        },2000)
    }
}
let shipOne = new Ship("StarFighter", 3, 380, 500, 0.5, "img/StarFighter.png")

class Planet {
    constructor(name,size,population,distance,development){
        this.name = name;
        this.size = size;
        this.population = population;
        this.distance = distance;
        this.shipsDocked = [];
        this.development = development;
    }
    getMarketPrice(price){
        return price = (this.development * price / Math.round(this.population/this.size))
    }
    repair(ship){
        // If ship is ship
        if(ship instanceof Ship){
            console.log(true)
        } else {
            console.log(false)
        }
        if(ship.docked.name === this.name){
            console.log('Ship is on this planet')
        } else {
            console.log('Ship is not on this planet')
        }
        if(ship.hull === ship.maxHull){
            console.log('Ship at MAX hull')
        } else if (ship.hull < ship.maxHull) {
            console.log('Ship will be repaired')
        }
        if(ship.credits > price){
            ship.hull = ship.maxHull
            console.log('Ship has enough credits')
        }
        if(ship.hull === ship.maxHull){
            console.log(ship.credits - price.repair)
            ship.isDamaged = false;
        }
    }
    refuel(ship){
        if(ship instanceof Ship){
            console.log('You can refuel')
        } else {
            console.log("You can't refuel")
        }
        if(ship.docked.name === this.name){
            console.log('Ship is on this planet')
        } else {
            console.log('Ship is not on this planet')
        }
        if(ship.fuel === ship.maxFuel){
            console.log('Ship fuel at MAX!')
        } else {
            console.log('Ship refueling')
        }
        if(ship.credits > price.repair){
            console.log('You have credits')
        } else {
            console.log('Not enough credits')
        }
        if(ship.fuel === ship.maxFuel){
            console.log(ship.credits - price.refuel)
        }
    }
    hireCrewMember(ship){
        if(ship instanceof Ship){
            console.log('You can add a crew member')
        } else {
            console.log("You cannot add a crew member")
        }
        if(ship.docked.name === this.name){
            console.log('Ship is on this planet')
        } else {
            console.log('Ship is not on this planet')
        }
        if(ship.credits > price.crew){
            console.log('You have credits for new crew member')
        } else {
            console.log('Not enough credits')
        }
        ship.crew += 1
        // console.log(ship.credits)
        // console.log(price.crew)
        return ship.credits - price.crew
    }
}
let price = {
    fuel: 50,
    repair: 60,
    crew: 80
}
let ships = [
    new Ship("StarFighter", 3, 380, 500, 0.5, "img/StarFighter.png"),
    new Ship("Crushinator", 5, 540, 400, 0.2, "img/Crushinator.png"),
    new Ship("Scouter", 1, 300, 300, 0.9, "img/Scouter.png")
]
let planets = [
    new Planet("Rubicon9", 300000, 2000000, 4, 2, "img/Rubicon9.png"),
    new Planet("R7", 120000, 4000000, 7, 3, "img/R7.png"),
    new Planet("Magmus", 500000, 10000000, 6, 1, "img/Magmus.png"),
    new Planet("Dextriaey", 50000, 500000, 9, 3, "img/Dextriaey.png"),
    new Planet("B18-1", 250000, 4000000, 12, 2, "img/B18-1.png")
]
let planetOne = new Planet("Rubicon9", 300000, 2000000, 4, 2, "img/Rubicon9.png");

shipOne.start(planetOne)