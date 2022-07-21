var dayToday = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(dayToday);

var nashBtn = document.getElementById("nashCard");
var atlaBtn = document.getElementById("atlaCard");
var tampBtn = document.getElementById("tampCard")

fetch('https://api.openweathermap.org/data/3.0/onecall?lat=36.16&lon=-86.78&appid=d15c5ecfcc50ad079c749626773e5846')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
})
.then(function() {
  
})
const textNash = document.createTextNode("Welcome to My channel");
const pNodeNash = document.getElementById("nashTemp");
pNodeNash.appendChild(textNash);
nashBtn.addEventListener("click", myFunction);
function myFunction() {
  alert ("Hello World!");
}

const textAtla = document.createTextNode("Welcome to My channel");
const pNodeAtla = document.getElementById("atlaTemp");
pNodeAtla.appendChild(textAtla);
atlaBtn.addEventListener("click", myFunction);
function myFunction() {
  alert ("Hello World!");
}

const textTamp = document.createTextNode("Welcome to My channel");
const pNodeTamp = document.getElementById("tampTemp");
pNodeTamp.appendChild(textTamp);
tampBtn.addEventListener("click", myFunction);
function myFunction() {
  alert ("Hello World!");
}
var input = document.getElementsByClassName("input");
var form = document.querySelector(".navbar form");
form.addEventListener("submit", e => {
  e.preventDefault();
  var inputVal = input.value;
});

var apikey = "d15c5ecfcc50ad079c749626773e5846";
var today = moment().format('L');
var searchHistoryList = [];
var owURL = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=d15c5ecfcc50ad079c749626773e5846';
fetch(owURL)
.then(response => response.json())

$("#searchBtn").on("click", function(event) {
  event.preventDefault();

  var city = $("#searchCity").val().trim();
  currentCondition(city);
  if (!searchHistoryList.includes(city)) {
      searchHistoryList.push(city);
      var prevCity = $(`
          <li class="list-group-item">${city}</li>
          `);
      $("#searchHistory").append(prevCity);
  };
  
  localStorage.setItem("city", JSON.stringify(searchHistoryList));
  console.log(searchHistoryList);
});


fetch('https://api.github.com/gists/public?since=06-01-2022&per_page=10')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
});

