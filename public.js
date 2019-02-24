function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputcelsius").innerHTML = (valNum - 32) / 1.8;
}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "bunty.txt", true);
    xhttp.send();
}