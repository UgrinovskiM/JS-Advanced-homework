// function Human(name,lastName, age, hair){
//     this.name = name,
//     this.lastName = lastName
//     this.age = age,
//     this.hair = hair
// }

// function Male(facialHair, sportId, name,lastName, age, hair){
//     Human.call(this,name,lastName, age, hair)
//     this.facialHair = facialHair
//     this.sportId = sportId
// }
// let m = new Male({name:'Marjan',lastName:'Ugrinovski',age:27,hair:'short'})
// console.log(m)

// function Female(hadBirth, numberOfShoes, name,lastName, age, hair){
//     Human.call(this, name, lastName, age, hair)
//     this.hadBirth = hadBirth
//     this.numberOfShoes = numberOfShoes
// }
// let olga = new Female(true,44,'Olga','Trpcevska','25','long')
// let stojance = new Male('yes','yes','Stojance','Ang',27,'short')

// class Human {
//     constructor(name, lastName, birthYear) {
//         this.name = name
//         this.lastName = lastName
//         this.birthYear = birthYear
//         this._age
//     }
//     set age(n) {
//         this.age = n
//     }
//     get age() {
//         return new Date().getFullYear() - this.birthYear - 1
//     }

//     sayName() {
//         return `My name is ${this.name} ${this.lastName}.`
//     }
// }

// class Male extends Human {
//     constructor(hasBeard, name, lastName, birthYear) {
//         super(name, lastName, birthYear)
//         this.hasBeard = hasBeard
//     }
//     static trimBeard() {
//         return 'Beard trimmed'
//     }
//     watchFootball() {
//         return 'Watching Football'
//     }
// }


// let me = new Male(true, 'Marjan', 'Ugrinovski', 1991)
// console.log(me.age)
// console.log(me.watchFootball())

class Starships{
    constructor(name,pilot,fuelTank,location,type){
        this.name = name
        this.pilot = pilot
        this.fuelTank = fuelTank
        this.location = location
        this.type = type
    }
    startEngine(){
        return `Ship started engine`
    }
    takeOff(){
        return `Ship taken off`
    }
    land(){
        return `Ship landed`
    }
}
class Fighter extends Starships{
    constructor(weapons, shield,numberOfKills,name,pilot,fuelTank,location,type){
        super(name,pilot,fuelTank,location,type)
        this.weapons = weapons
        this.shield = shield
        this.numberOfKills = numberOfKills
    }
    shootWeapon1(){
        return `Weapon one fired`
    }
    shootWeapon2(){
        return `Weapon two fired`
    }
    shootWeapon3(){
        return `Weapon three fired`
    }
}
class Cargo extends Starships{
    constructor(cargoCapacity,tradingRoute,loadingCranes,name,pilot,fuelTank,location,type){
        super(name,pilot,fuelTank,location,type)
        this.cargoCapacity = cargoCapacity
        this.tradingRoute = tradingRoute
        this.loadingCranes = loadingCranes
    }
    load(){
        return `Cargo loaded`
    }
    unload(){
        return `Cargo unloaded`
    }
}
class Mining extends Starships{
    constructor(miningTools, miningTypes,miningStorage,name,pilot,fuelTank,location,type){
        super(name,pilot,fuelTank,location,type)
        this.miningTools = miningTools
        this.miningTypes = miningTypes
        this.miningStorage = miningStorage
    }
    mine(){
        return `Place harvested`
    }
    storageTemp(){
        return `-2 Celsius`
    }
}
let deathStar = new Fighter(true,true,9999,'Death Star','Darth Vader','Plin','Space','Fighter')
console.log(deathStar)
let falcon = new Cargo(5,'11 Oktomvri to Seavus',true,"Milenium Falcon",'Han Solo','Diesel','Space','cargo')
console.log(falcon)
let miningShip = new Mining(true,'Iron','Very Big','asd','Marjan','Benzin','Skopje','Mining ship')
console.log(miningShip)
$('body').append(`<div>
<h1>Fighter ship</h1>
<h2>Name: ${deathStar.name}</h2>
<p>Pilot name: ${deathStar.pilot}<br>
Fuel tank: ${deathStar.fuelTank}<br>
Location: ${deathStar.location}<br>
Type: ${deathStar.type}<br>
Function start engine: ${deathStar.startEngine()}<br>
Function take off: ${deathStar.takeOff()}<br>
Function land: ${deathStar.land()}<br>
Weapons: ${deathStar.weapons}<br>
Weapon one function: ${deathStar.shootWeapon1()}<br>
</p>
</div>`);

$('body').append(`<div>
<h1>Cargo ship</h1>
<h2>Name: ${falcon.name}</h2>
<p>Pilot name: ${falcon.pilot}<br>
Fuel tank: ${falcon.fuelTank}<br>
Location: ${falcon.location}<br>
Type: ${falcon.type}<br>
Function start engine: ${falcon.startEngine()}<br>
Function take off: ${falcon.takeOff()}<br>
Function land: ${falcon.land()}<br>
Cargo capacity: ${falcon.cargoCapacity}<br>
Trading route: ${falcon.tradingRoute}<br>
Loading cranes: ${falcon.loadingCranes}<br>
Function load: ${falcon.load()}<br>
Function unload: ${falcon.unload()}<br>
</div>`)

$('body').append(`<div>
<h1>Mining ship</h1>
<h2>Name: ${miningShip.name}</h2>
<p>Pilot name: ${miningShip.pilot}<br>
Fuel tank: ${miningShip.fuelTank}<br>
Location: ${miningShip.location}<br>
Type: ${miningShip.type}<br>
Function start engine: ${miningShip.startEngine()}<br>
Function take off: ${miningShip.takeOff()}<br>
Function land: ${miningShip.land()}<br>
Mining tools: ${miningShip.miningTools}<br>
mining types: ${miningShip.miningTypes}<br>
mining storage: ${miningShip.miningStorage}<br>
Function mine: ${miningShip.mine()}<br>
function storage temperature: ${miningShip.storageTemp()}<br>
</div>`)