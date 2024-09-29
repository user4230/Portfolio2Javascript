// JavaScript Exercise: Student Grade Analysis

// 1. Create an array that holds 8 grades (integers between 0 and 100)
// representing the scores of different students - level 1

const grades = [59, 37, 95, 72, 83, 24, 45, 67]

// 2. Log out how many grades there are - level 1

console.log('There are ' + grades.length + ' grades in total')

// 3. Classify each grade into one of the following categories - level 2
// A: if the grade is 90 or above.
// B: if the grade is between 80 and 89.
// C: if the grade is between 70 and 79.
// D: if the grade is between 60 and 69.
// F: if the grade is below 60.

for(let i= 0; i < grades.length; i++) {
    let grade = grades[i];
    if (grade >= 90) {
        console.log('Grade is A')
    } else if (grade >= 80 && grade <= 89) {
        console.log('Grade is B')
    } else if (grade >= 70 && grade <= 79) {
        console.log('Grade is C')
    } else if (grade >= 60 && grade <= 69) {
        console.log('Grade is D')
    } else {
        console.log('Grade is F')
    }
}
// 'Grade is A' is logged once
// 'Grade is B' is logged once
// 'Grade is C' is logged once
// 'Grade is D' is logged once
// 'Grade is F' is logged 4 times

// 4. Evaluate overall class performance - level 2
// If the average grade is 90 or above, the class performance is Excellent.
// If the average grade is between 80 and 89, the performance is Good.
// If the average grade is between 70 and 79, the performance is Satisfactory.
// If the average grade is below 70, the performance is Needs Improvement.

let sum = 0;
for(let i = 0; i < grades.length; i++) {
    sum += grades[i]
}
const gradeAverage = sum / grades.length
if (gradeAverage >= 90) {
    console.log('The class performance is Excellent.')
} else if (gradeAverage >= 80 && gradeAverage <= 89) {
    console.log('The class performance is Good.')
} else if (gradeAverage >= 70 && gradeAverage <= 79) {
    console.log('The class performance is Satisfactory.')
} else {
    console.log('The class performance needs Improvement.');
}

// 'The class performance needs Improvement' is logged, as the average grade is 60.25

// 5. Optional - Determine - level 3
// The highest grade in the array.
// The lowest grade in the array.
// The average grade.

let highestGrade = grades[0];
let lowestGrade = grades[0];
let gradeSum = 0;
for (let i = 0; i < grades.length; i++) {
    if(grades[i] > highestGrade) {
        highestGrade = grades[i]
    }
    if(grades[i] < lowestGrade) {
        lowestGrade = grades[i]
    }
    gradeSum += grades[i]
}
let averageGrade = gradeSum / grades.length;

console.log(highestGrade);
console.log(lowestGrade);
console.log(averageGrade);

// 6. Output:
// The highest grade with its category.
// The lowest grade with its category.
// The average grade.
// A list of all grades with their corresponding categories.

function getGradesWithCategories (grades) {
    if (grades >= 90) {
        return 'Grade is A';
    } else if (grades >= 80 && grades <= 89) {
        return 'Grade is B'
    } else if (grades >= 70 && grades <= 79) {
        return 'Grade is C'
    } else if (grades >= 60 && grades <= 69) {
        return 'Grade is D'
    } else {
        return 'Grade is F'
    }
}
console.log(getGradesWithCategories(highestGrade))
console.log(getGradesWithCategories(lowestGrade))
console.log(getGradesWithCategories(averageGrade))

// Treasure Hunter
// Scenario:
// You are on a small island, and there's a treasure box hidden somewhere!
// Your job is to move around the island to find it.
// Instructions:
// 1. Island Setup:
// The island is represented by a 1D array of 5 elements.
// One of these elements is the hidden treasure (T), and the rest are empty (-).

const islandWithTreasure = ['-', '-', 'T', '-', '-']

// Objectives:
// 1. Log out how many moves there are on the island - level 1

console.log('There are ' + islandWithTreasure.length + ' moves on this island.')

// 2. For each move log the following out - If there is a treasure log out:
// Treasure found at move 3 :)
// If there is not a treasure log out: No treasure found :(

islandWithTreasure.forEach((treasure,index) => {
    if (treasure === 'T') {
        console.log(`Treasure found at move ${index + 1}`)
    } else {
        console.log('No treasure found :(')
    }
});

// + 1 is in ${index} to correctly represent the move number, as the first index is = 0

// Log out how many treasures there are on the island - level 3

function getTreasureCount () {
    let amountOfTreasures = 0
    for (let i in islandWithTreasure) {
        if (islandWithTreasure[i] === 'T') {
            amountOfTreasures++;
        }
    } return amountOfTreasures }

console.log(('There are ' + getTreasureCount(islandWithTreasure) + ' treasure(s) on this island'))

// Startup name generator
// Let's create a function that can generate startup names:
// Create a function called getStartupName.
// When called it should return a random startup name. Here is how it should work:

// Inside the function there should be two arrays with startup words
// Use the two arrays to get a random word from each array and return the new startup name with the two words

function getStartupName () {
    const StartupNames1 = ["Comp", "ZX", "OSC", "Green", "Oceans", "Leaf", "EQ"]
    const StartupNames2 = ["Solutions", "Hub", "Works", "Financials", "Visions", "Networks", "Innovations"]
    return StartupNames1 [Math.floor(Math.random() * StartupNames1.length)] + ' ' +
        StartupNames2 [Math.floor(Math.random() * StartupNames2.length)]
} console.log(getStartupName())

// Math.floor rounds up to the nearest integer
// Math.random gives a random floating point between 0-1
// Added string with space in it to separate StartupNames1 and 2 when logged out

