// Your code here
// Function to create an employee record
function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Function to create employee records from an array of arrays
  function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(createEmployeeRecord);
  }
  
  // Function to add a timeIn event to an employee's record
  function createTimeInEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(" ");
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour, 10) });
    return this;
  }
  
  // Function to add a timeOut event to an employee's record
  function createTimeOutEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour, 10) });
    return this;
  }
  
  // Function to calculate the hours worked on a specific date
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  // Function to calculate wages earned on a specific date
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  // Function to calculate all wages for an employee
  function allWagesFor() {
    const dates = this.timeInEvents.map(event => event.date);
    const wages = dates.map(date => wagesEarnedOnDate.call(this, date));
    return wages.reduce((total, wage) => total + wage, 0);
  }
  
  // Function to calculate payroll for all employees
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => {
      return totalPayroll + allWagesFor.call(employee);
    }, 0);
  }
  
  // Function to find an employee record by first name in a collection
function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
  }
  // Exporting functions
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    calculatePayroll
  };