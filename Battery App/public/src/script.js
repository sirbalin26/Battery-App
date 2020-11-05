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

function healt(buttonHealt) {
    let ClickShowHealt;
    if(confirm("Your battery healt is good !")) {
        ClickShowHealt = "Battery healt is 100%";
    } else {
        ClickShowHealt = "Your battery is ok!";
    }
    document.getElementById("battery-details").innerHTML = ClickShowHealt;
}

function capacity(buttonCapacity) {
    let ClickShowCapacity;
    if(confirm("Your battery it has 3000 mAh ! ")) {
        ClickShowCapacity = "Your battery it has 3000 mAh"; 
    } else {
        ClickShowCapacity = "Your battery it has 3000 mAh";
    }
    document.getElementById("battery-details").innerHTML = ClickShowCapacity;
}