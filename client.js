

var atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
var jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
var boo = { name: 'Boo', employeeNumber: '11435', annualSalary: '54000', reviewRating: 3 };
var scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
var robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
var mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

var employees = [atticus, jem, boo, scout, robert, mayella];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

var totalBonusPerc = 0;


for (var i = 0; i < employees.length; i++) {
  employees[i].annualSalary = parseInt(employees[i].annualSalary);
  bonusCalculator(employees[i]);
  seniorityBonus(employees[i]);
  bigBucks(employees[i]);
  bonusCeiling(employees[i]);
  bonusFloor(employees[i]);

}





function bonusCalculator(employee) {
  if (employee.reviewRating <= 2) {
    return ('No bonus!');
  } else if (employee.reviewRating == 3) {
    totalBonusPerc = 0.04;
  } else if (employee.reviewRating == 4) {
    totalBonusPerc = 0.06;
  } else if (employee.reviewRating == 5) {
    totalBonusPerc = 0.10;
  }
  return totalBonusPerc;
}
function seniorityBonus(employee){
  if(employee.employeeNumber.length == 4){
    totalBonusPerc += .05;
  }
}

function bigBucks(employee){
  if(employee.employeeSalary > 65000){
    totalBonusPerc -= .01;
  }
}

function bonusCeiling(){
  if (totalBonusPerc > 0.13) {
    totalBonusPerc = 0.13;
    return totalBonusPerc;
  }
}
function bonusFloor() {
  if (totalBonusPerc < 0) {
    totalBonusPerc = 0;
    return totalBonusPerc;
  }
}




//bonusCalculator(employees[2]);

// function Review(employees[i]) {
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//   }
// }
