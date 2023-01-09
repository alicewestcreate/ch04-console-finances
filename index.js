var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];



// ---------------- CALCULATION 1 ------------------------

// 1 - This calculates the total number of enteries/months. 
// (The total number of months is = to the number of values in the array)
var financeLength = finances.length



// ---------------- CALCULATION 2 ------------------------

// 2 - This calculate the total sum of values within the array.
// (To begin with, sum = 0. For every iteration of the loop, find the current value of finances[i][0] and add it the value of sum.
// Repeat until i is = the length of finances array.) 
let sumTotal = 0;

for ( var i=0; i < finances.length; i++) {
    sumTotal += finances[i][1];

}



// ---------------- CALCULATION 3 ------------------------


// 3 - This calculate the average change in profit/losses, in two parts. 
// FIRSTLY - Calculate the change for each month, by subtracting the current month by the previous month
// Then push/add the value to the new array, named changes


var previousMonth = 0 // A counter starting at 0 which is asigned to the first month in the list 
var currentMonth = 1 // A counter starting at 1 which is asigned to the second month in the list 
var changes = [] // An array which will store the value for each change. 



// While the value of previousMonth and the value for currentMonth is less than the length of finance array, repeat this loop.
while (previousMonth < finances.length && currentMonth < finances.length) {

    //SUBTRACT finance[currentMonth][column index 1] from finance[previousMonth][column index 1] to calculate the difference.
    // list the value of change in finance[column index 2] and push/add the value to the new array named changes.
    changes.push(finances[currentMonth][2] = (finances[currentMonth][1]) - (finances[previousMonth][1]));
    previousMonth++;
    currentMonth++;
}


// SECONDLY - Divide the value of changes by the total number of enteries. 

var sumOfChanges = 0

// For each item inside changes, add the value of each item to sumOfChanges to add all items together.
for (var value of changes) {
    var sumOfChanges = (sumOfChanges += value)
}

//Then calculate the average. Total sum divided by the number of enteries. 
var average = sumOfChanges / changes.length;
//This display the average, rounded to 3 decimals. 



// ---------------- CALCULATION 4 ------------------------


// 4 - This finds the month and the value which made the greatest increase in profit (from the changes column)

var greatestProfit = 0
var profitDate = []


// Complete this loop for the length of the arrange. 
for (let arrayIndex = 1; arrayIndex < finances.length; arrayIndex++) {

    // take the first array and if it is greater than greatestProfit. Update greatestProfit to equal the array in the loop.
    if (finances[arrayIndex][2] > greatestProfit) {
        greatestProfit = finances[arrayIndex][2]
        // Next, find the corresponding month to the greatestProfit value.  
        profitDate = (`Index Num: ${arrayIndex} : ${finances[arrayIndex][0]} ${finances[arrayIndex][1]}`)
    }   
 
}


// ---------------- CALCULATION 5 ------------------------


// 5 - Find the month and the value which made the greatest loss. (from the changes column)

var greatestLoss = 0
var lossDate = []

for (let arrayIndex = 1; arrayIndex < finances.length; arrayIndex++) {

    if (finances[arrayIndex][2] < greatestLoss) {
        greatestLoss = finances[arrayIndex][2]
        lossDate = (`Index Num: ${arrayIndex} : ${finances[arrayIndex][0]} ${finances[arrayIndex][2]}`)
    }   
 
}



// ---------------- SUMMARY ------------------------


console.log("Financial Analysis")
console.log("-----------------------------")
console.log(`(1): Total Months:${financeLength}`)
console.log(`(2): Total: ${sumTotal}`)
console.log(`(3): The average = ${average.toFixed(3)}`)
console.log(`(4): The greatest profit Date / Value: ${profitDate}`)
console.log(`(5): The least profit Date / Value:  ${lossDate}`)


console.log("\nData")
console.table(finances)


