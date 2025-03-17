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
