const LOCAL_FORECAST = {
    today: {min: 72, max: 83}, 
    tomorrow: {min: 72.3, max: 84.6}
};

function getMaxOfTmew(forecast) {
    "use strict";

    const { tomorrow : {max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmew(LOCAL_FORECAST));