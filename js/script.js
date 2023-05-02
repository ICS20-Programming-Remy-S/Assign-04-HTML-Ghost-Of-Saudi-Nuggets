// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict"

function enterClicked() {
  
 //Declare the value for tax and discount
  const TAX_RATE = 1.13;
  
  const DISCOUNT = 0.05;

  const SAUCEPRICE = 0.10;

  //What the user ordered 
  let nuggetChoice = document.getElementById('user-nuggets').value;
  
  let drinkChoice = document.getElementById('user-drink').value;
  
  let friesChoice = document.getElementById('user-fries').value;

   //The price of each based on what user ordered

  let nuggetPrice = "";

  let drinkPrice = "";

  let friesPrice = "";

  //Get the user input for amount of main, sides and sauce
  let userMain = parseInt(document.getElementById("user-main").value);
  
  let userSide1 = parseInt(document.getElementById("user-side-1").value);
  
  let userSide2 = parseInt(document.getElementById("user-side-2").value);
  
  let sauceAmount = parseInt(document.getElementById("sauce-amount").value);

   //if statements for the value of nuggets
  if (nuggetChoice == "6pcs nugget"){
    nuggetPrice = 5.99;
  }
  else if (nuggetChoice == "10pcs nugget"){
  nuggetPrice = 7.49;
  }
  else{
    nuggetPrice = 11.99;
  }

  //if stament for the value of drink
  if (drinkChoice == "Small Drink"){
    drinkPrice = 1.50;
  }
  else if (drinkChoice == "Medium Drink"){
    drinkPrice = 2.25;
  }
  else{
    drinkPrice = 3.00;
  }

   //if stament for the value of fries
  if (friesChoice == "small fries"){
    friesPrice = 1.25;
  }
  else if (friesChoice == "medium fries"){
    friesPrice = 2.00;
  }
  else{
    friesPrice = 2.50;
  }
  
 //Use calculation 
  let subTotal = (nuggetPrice * userMain) + (drinkPrice * userSide1) + (friesPrice * userSide2) + (SAUCEPRICE * sauceAmount);
  let total = subTotal * TAX_RATE;
  let discountTotal = total - (total * DISCOUNT);
 //Display information back to user 
  document.getElementById('userMoneySpent').innerHTML = 'The subtotal of your order is $' + subTotal.toFixed(2) + '.'
  document.getElementById('moneyTaxed').innerHTML = 'The total amount this order will cost you is $ ' + total.toFixed(2) + '.'
  document.getElementById('discountedMoney').innerHTML = 'The amount of money this will cost you with the discount is $ ' + discountTotal.toFixed(2) + '.'
}
