// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'Ali';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
} 

function overwriteBestCustomer(newName) {
    bestCustomer = newName;
}

function changeLeastFavoriteCustomer(newerName) {
    leastFavoriteCustomer = newerName;
}