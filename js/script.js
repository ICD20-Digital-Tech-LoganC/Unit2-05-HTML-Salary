// Created by: Logan Connors
// Created on: Mar 25 2024
// This file contains the JS functions for index.html
"use strict";

// This function calculates the salary of the user
function enterClicked() {
  // input
  let hours_worked = parseInt(document.getElementById('hours_worked').value);
  let hourly_Rate = parseInt(document.getElementById('hourly_Rate').value);

  // process
  let preTaxTotal = hours_worked * hourly_Rate;
  let afterTaxTotal = 0.2005 * preTaxTotal;

  // output
  document.getElementById('answers2').innerHTML = 'Your pay will be $' + preTaxTotal;
  document.getElementById('answers').innerHTML = 'The government will take $' + afterTaxTotal;
}