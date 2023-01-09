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



//console.log(`${finances}`)
//console.table(finances)
console.log(finances[0][0]);

// Tasks at hand


// Work out the total number of months. Do this by working out the total number of enteries, as it appears to be in order with no misssing dates. 
var financeLength = finances.length
console.log(`Total Months:${financeLength}`)


// Net total. Do this by accessing the second item inside the nested array, create a loop that will add the next number to the current calculation

let sum = 0;

for ( var i=0; i < finances.length; i++) {
    sum += finances[i][1];

}
console.log(`Total: ${sum}`)


// find the finances array
// once found, find the second item for each item inside the nested array
// collect/store this number
// and sum it to the next number 
// keep going until the end of the loop 


// Average of changes. Create a new array that holds the changes from month to month. 

var i = 0 // Starting value of 0 
var j = 1 // Starting value of 1
var differences = []


//Note: both i and j need to be less than the finances.length, otherwise, an error is thrown. 
//And the program tries to code a row that does not exsist at the end of the program. = "finances["the end of the list" + 1][1]"" is not definded)
while (i < finances.length && j < finances.length) {
    
    //Create an addional column in the finance array
    //And calculate the difference by second row - the first row. 
    //And repeat for as long as the value for i and j is less than the length of the list.
    differences.push(finances[j][2] = (finances[j][1]) - (finances[i][1]));
    i++;
    j++;
}

console.table(finances)
console.table(differences)



// Add all values togther and divid by total. To get average. 

// Initialise the array, to hold the sum of the 'difference' array.
var sumDifference = 0

//This loop will calculate the total value from the differences array.
// For the same num of differences, get the value of differences, and add it to the value to sumDifference, and repeat
for (var value of differences) {
    var sumDifference = (sumDifference += value)
}

//This calculates the average, by dividing the length by the sum of the values.
var average = sumDifference / differences.length;

//This display the average, rounded to 3 decimals. 
console.log(`The average = ${average.toFixed(3)}`)


//Greatest increase in profit. Use a sort method to find highest number

var greatestProfit = 0

for (let arrayIndex = 0; arrayIndex < differences.length; arrayIndex++) {
    if (differences[arrayIndex] > greatestProfit) {
        greatestProfit = differences[arrayIndex]
    }   
}

console.log(`The greatest profit is: ${greatestProfit}`)


//Greatet decrease in losses. Use a sort method to find lowest number
