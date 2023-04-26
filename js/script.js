// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict"

function enterClicked () {
  //Declare the value for tax and discount
  const TAX_RATE = 1.15;
  const DISCOUNT = 0.05;
  //Get the user input for amount of main, sides and sauce
  let userMain = parseFloat(document.getElementById("user-main").value)
  let userSide1 = parseFloat(document.getElementById("user-side-1").value)
  let userSide2 = parseFloat(document.getElementById("user-side-2").value)
  let userSauce = parseFloat(document.getElementById("user-sauce").value)
  //Get the input for the type of main, side and sauce from dropdown 
  let

  //Use calculation 
  let subTotal = (chickenPrice * chickenAmount) + (drinkPrice * drinkAmount) + (friesPrice * friesAmount) + (saucePrice * sauceAmount)
  let total = subTotal * TAX_RATE
  let discountTotal = total * (total * DISCOUNT)
  
  //Display information back to user 
  document.getElementById('userMoneySpent').innerHTML = 'The amount of money this wil cost you is' + subTotal.toFixed(2)
  document.getElementById('moneyTaxed').innerHTML = 'The amount of money this will cost you in total is $ ' + total.toFixed(2)
  document.getElementById('discountedMoney').innerHTML = 'The amount of money this will cost you with the discount is $ ' + discountTotal.toFixed(2)
}
