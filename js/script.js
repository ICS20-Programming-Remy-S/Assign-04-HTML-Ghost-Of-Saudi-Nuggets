// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict"

function enterClicked () {
  // create a variable for the movie age limit if statment text
  let result = "";

  // Use age user has entered for results
  let userAge = parseInt(document.getElementById("user-age").value);
  
  // Display if the user can see R movies
  if (userAge >= 18) {
    result = "The Tempeture you can go see R rated movies by yourself."
  }
  //Display if the user can go see pg-13 movies
  else if ( userAge >= 13){
    result = "You can go see pg-13 movies by yourself."
  }
   //Display if the user can go see pg movies
  else if ( userAge >= 5){
    result = "You can go see pg movies by yourself."
  }
    //Display if the user can't go to movies
  else if ( userAge >= 0){
    result = "You can't go to movies by yourself"
  }
    //Display if user did not entre valid age
  else
    result = "Please Entre valid age"
  // Display Results back to User
  document.getElementById('result').innerHTML = result
}