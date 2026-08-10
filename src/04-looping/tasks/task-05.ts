/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */
const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldMedals = 0;
let silverMedals = 0;
let bronzeMedals = 0;
let noMedals = 0;
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];

    if (scores[i] >= 95) {
        goldMedals++;
    } else if (scores[i] >= 85) {
        silverMedals++;
    } else if (scores[i] >= 75) {
        bronzeMedals++;
    } else {
        noMedals++;
    }
}

const averageScore = totalScore / scores.length;

console.log("Gold Medal Winners   :", goldMedals);
console.log("Silver Medal Winners :", silverMedals);
console.log("Bronze Medal Winners :", bronzeMedals);
console.log("No Medal             :", noMedals);
console.log("Average Score        :", averageScore);