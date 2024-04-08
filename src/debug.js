function getRandomIntInRange(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
const coolnessGauge = (numOfFridges) => {
  if (numOfFridges < 4)
    return "You need more fridges.";
  else
    return "You are downright chilly!";
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

const getWeatherReport = (temperature) => {
  let weatherReport = "It's not too bad!";
  if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
  }
  else if (temperature > 32 && temperature <= 90) {
    weatherReport = "At least it's a dry heat.";
  }
  else if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
  }
  console.log(weatherReport);
  console.log("And that's your report!");
  return weatherReport;
}

const returnPositiveNegativeZero = (num) => {
  if (num < 0) {
    return "Negative";
  } else
    return num === 0 ? "Zero" :
      "Positive";
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
