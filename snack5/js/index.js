
// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti

const volleyTeams = [
    {name: "tigrotti", score: generateRandomNumber(1, 100), penality: generateRandomNumber(1,20)},
    {name: "barzelli", score: generateRandomNumber(1, 100), penality: generateRandomNumber(1,20)},
    {name: "allegrotti", score: generateRandomNumber(1, 100), penality: generateRandomNumber(1,20)}
];

console.log (volleyTeams);
// ==================== FUNCTIONS ====================

// Random number between two numbers
function generateRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}