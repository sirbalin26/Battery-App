console.log("Battery status");

function inspect(buttonInspect) {
    let ClickShowStatus;
    if(confirm("Your battery is charged !")) {
        ClickShowStatus = "Actual battery > 60%";
    } else {
        ClickShowStatus = "Battery discharged in 3 hours";
    }
    document.getElementById("battery-details").innerHTML = ClickShowStatus;
}