

var atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
var jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
var boo = { name: 'Boo', employeeNumber: '11435', annualSalary: '54000', reviewRating: 3 };
var scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
var robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
var mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

var employees = [atticus, jem, boo, scout, robert, mayella];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT


var totalBonusPerc = 0;
var bonusReport = {} //this will be our empty object to store all the different things we need to calculate seperately for each object

function employeePayouts(employees){

  for (var i = 0; i < employees.length; i++) {

  bonusReport.name = employees[i].name;
  bonusReport.bonusPercentage = bonusCalculator(employees[i]);
  bonusReport.totalCompensation = (parseInt(employees[i].annualSalary) * bonusCalculator(employees[i])) + parseInt(employees[i].annualSalary); //borrowed from what we figured out beforebase annual + bonus
  bonusReport.totalBonus = parseInt(employees[i].annualSalary) * bonusCalculator(employees[i]);
  
  }

}
employeePayouts(employees); //we need to call the fucntion to get it to run.

//we really don't need if/else statements.  At least one of the check criteria will apply to every employee.  We can just do 'if' statements to modify the percentage and therefore we can combine all the checks together.

function bonusCalculator(employee) {
  if (employee.reviewRating <= 2) {
    totalBonusPerc = 0;
  }
   if (employee.reviewRating == 3) {
    totalBonusPerc = 0.04;
  }
   if (employee.reviewRating == 4) {
    totalBonusPerc = 0.06;
  }
   if (employee.reviewRating == 5) {
    totalBonusPerc = 0.10;
  }
   if(employee.employeeNumber.length == 4){
    totalBonusPerc += .05;
  }
   if(employee.employeeSalary > 65000){
    totalBonusPerc -= .01;
  }
  if (totalBonusPerc > 0.13) {
    totalBonusPerc = 0.13;
  }
    if (totalBonusPerc < 0) {
    totalBonusPerc = 0;
  }
  return totalBonusPerc;
}
