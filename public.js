function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputcelsius").innerHTML = (valNum - 32) / 1.8;
}