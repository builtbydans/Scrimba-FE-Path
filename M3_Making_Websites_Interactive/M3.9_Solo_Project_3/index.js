const input = document.getElementById('input-box');
const button = document.getElementById('convert-btn');
const length = document.getElementById('length-text');
const volume = document.getElementById('volume-text');
const mass = document.getElementById('mass-text');

const metersConv = 3.281
const litersConv = 0.264;
const kiloConv = 2.204;

button.addEventListener("click", function() {
  let inputVal = input.value;
  getLength(inputVal);
  getVolume(inputVal);
  getMass(inputVal);
});

function sentence(val, unit1, conv1, unit2, conv2) {
  return `${val} ${unit1} = ${conv1} ${unit2} | ${val} ${unit2} = ${conv2} ${unit1}`
};

function getLength(value) {
  let metersToFeet = (value * metersConv).toFixed(3);
  let feetToMeters = (value / metersConv).toFixed(3);

  length.textContent =
    sentence(value, "meters", metersToFeet, "feet", feetToMeters);
};

function getVolume(value) {
  let litersToGallons = (value * litersConv).toFixed(3);
  let gallonsToLiters = (value / litersConv).toFixed(3);

  volume.textContent =
    sentence(value, "liters", litersToGallons, "gallons", gallonsToLiters);
};

function getMass(value) {
  let kiloToPounds = (value * kiloConv).toFixed(3);
  let poundsToKilo = (value / kiloConv).toFixed(3);

  mass.textContent =
    sentence(value, "kilos", kiloToPounds, "pounds", poundsToKilo);
};
