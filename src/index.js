import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Person } from "../src/js/person.js";



function updateEarthValues (person) {
  
  $("#earth-age-header").text(person.earthAge);
  $("#earth-age-body").text(person.earthAge);
  
  $("#earth-life-expectancy-header").text(person.earthLifeExpectancy);
  $("#earth-life-expectancy-body").text(person.earthLifeExpectancy);
  if (person.getYearsLeft("Earth") > 0) {
    $("#earth-years-left-header").text(person.getYearsLeft("Earth") + " years left");
    $("#earth-years-left-body").text(person.getYearsLeft("Earth") + " years left to live");
  } else {
    $("#earth-years-left-header").text((person.getYearsLeft("Earth") * - 1) + " Earth years over!");
    $("#earth-years-left-body").text("a " + (person.getYearsLeft("Earth") * - 1) + " Earth year surplus! You've beaten our algorithm");
  }
  
}

function updateMercuryValues (person) {
  person.mercuryYears = person.planetCalc(person.earthAge, .24);
  person.mercuryLifeExpectancy = person.planetCalc(person.earthLifeExpectancy, .24);
  $("#mercury-age-header").text(person.mercuryYears);
  $("#mercury-age-body").text(person.mercuryYears);
  
  $("#mercury-life-expectancy-header").text(person.mercuryLifeExpectancy);
  $("#mercury-life-expectancy-body").text(person.mercuryLifeExpectancy);

  if (person.getYearsLeft("Mercury") > 0) {
    $("#mercury-years-left-header").text(person.getYearsLeft("Mercury") + " years left");
    $("#mercury-years-left-body").text(person.getYearsLeft("Mercury") + " Mercury years left to live");
  } else {
    $("#mercury-years-left-header").text((person.getYearsLeft("Mercury") * - 1) + " Mercury years over!");
    $("#mercury-years-left-body").text("a " + (person.getYearsLeft("Mercury") * - 1) + " Mercury year surplus! You've beaten our algorithm");
  }
}

function updateVenusValues (person) {
  person.venusYears = person.planetCalc(person.earthAge, .62);
  person.venusLifeExpectancy = person.planetCalc(person.earthLifeExpectancy, .62);
  $("#venus-age-header").text(person.venusYears);
  $("#venus-age-body").text(person.venusYears);
  
  $("#venus-life-expectancy-header").text(person.venusLifeExpectancy);
  $("#venus-life-expectancy-body").text(person.venusLifeExpectancy);

  if (person.getYearsLeft("Venus") > 0) {
    $("#venus-years-left-header").text(person.getYearsLeft("Venus") + " years left");
    $("#venus-years-left-body").text(person.getYearsLeft("Venus") + " Venus years left to live");
  } else {
    $("#venus-years-left-header").text((person.getYearsLeft("Venus") * - 1) + " Venus years over!");
    $("#venus-years-left-body").text("a " + (person.getYearsLeft("Venus") * - 1) + " Venus year surplus! You've beaten our algorithm");
  }
}

function updateMarsValues (person) {
  person.marsYears = person.planetCalc(person.earthAge, 1.88);
  person.marsLifeExpectancy = person.planetCalc(person.earthLifeExpectancy, 1.88);
  $("#mars-age-header").text(person.marsYears);
  $("#mars-age-body").text(person.marsYears);
  
  $("#mars-life-expectancy-header").text(person.marsLifeExpectancy);
  $("#mars-life-expectancy-body").text(person.marsLifeExpectancy);

  if (person.getYearsLeft("Mars") > 0) {
    $("#mars-years-left-header").text(person.getYearsLeft("Mars") + " years left");
    $("#mars-years-left-body").text(person.getYearsLeft("Mars") + " Mars years left to live");
  } else {
    $("#mars-years-left-header").text((person.getYearsLeft("Mars") * - 1) + " years over!");
    $("#mars-years-left-body").text("a " + (person.getYearsLeft("Mars") * - 1) + " Mars year surplus! You've beaten our algorithm");
  }
}

function updateJupiterValues (person) {
  person.jupiterYears = person.planetCalc(person.earthAge, 11.86);
  person.jupiterLifeExpectancy = person.planetCalc(person.earthLifeExpectancy, 11.86);
  $("#jupiter-age-header").text(person.jupiterYears);
  $("#jupiter-age-body").text(person.jupiterYears);
  
  $("#jupiter-life-expectancy-header").text(person.jupiterLifeExpectancy);
  $("#jupiter-life-expectancy-body").text(person.jupiterLifeExpectancy);

  if (person.getYearsLeft("Jupiter") > 0) {
    $("#jupiter-years-left-header").text(person.getYearsLeft("Jupiter") + " years left");
    $("#jupiter-years-left-body").text(person.getYearsLeft("Jupiter") + " Jupiter years left to live");
  } else {
    $("#jupiter-years-left-header").text((person.getYearsLeft("Jupiter") * - 1) + " years over!");
    $("#jupiter-years-left-body").text("a " + (person.getYearsLeft("Jupiter") * - 1) + " Jupiter year surplus! You've beaten our algorithm");
  }
}


$(document).ready(function () {
  $("#calculate-planet-values").click(function() {
    $("#earth-info-container").hide();
    $("#mercury-info-container").hide();
    $("#venus-info-container").hide();
    $("#mars-info-container").hide();
    $("#jupiter-info-container").hide();
    
    let person = new Person($("#name").val(), $("#age").val(), $("#climate").val(), $("#calorie-count").val(), $("#coffee-or-tea").val());
    person.calculateLifeExpectancy();
    
    updateEarthValues(person);
    updateMercuryValues(person);
    updateVenusValues(person);
    updateMarsValues(person);
    updateJupiterValues(person);

    $("#earth-info-container").slideDown(1000, function (){
      $("#mercury-info-container").slideDown(800, function (){
        $("#venus-info-container").slideDown(600, function (){
          $("#mars-info-container").slideDown(400, function (){
            $("#jupiter-info-container").slideDown(200, function (){
            });
          });
        });
      });
    });
  });
});