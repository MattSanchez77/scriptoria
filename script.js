// Part 1

const PI = 3.1415;
const radius = 5;
const area = PI * radius ** 2
const spacePerPlant = 0.8;
const startPlants = 20;
const totalPossiblePlants = area / spacePerPlant

// Plants double every week
// Prund plants space > 80% total possible
// Monitored = 50 0 80%
//Plantd - plants < 50% total space
// Weeks 1, 2, 3
let week = 3;
let weeklyplants = startPlants * (2 ** week); // 20 * (2)
let percentage = (weeklyplants / totalPossiblePlants) * 100;

if (percentage > 80){
    console.log(`week ${week}:${weeklyplants}% full - Prune`)
} else if (percentage > 50){
    console.log(`week ${week}:${weeklyplants}% full - Monitor`)
} else {
    console.log(`week ${week}:${weeklyplants}% full - Plant More`)
}
// Part 2

let newStartingplants = 100;
let totalWeeks = 10;
let newTotalPlants = newStartingplants * (2 ** totalWeeks);
let totalSpace = newTotalPlants * spacePerPlant // 81920m
let newRadius = Math.sqrt(totalSpace / PI)

console.log(`Total plants after ${totalWeeks} weeks: ${newTotalPlants}`);
console.log(`total Space Required: $(totalSpace)m`);
console.log(`New Radius: ${newRadius}m`);

//Part 3

try{
    let spaceRequired = newStartingplants * spacePerPlant;
    if(spaceRequired > area) throw Error('Not Enough Space, cannot accomadate')
    console.log(`Garden does not have enough space to plant ${newStartingplants}plants);`)

} catch (err) {
    console.error(message)
}



