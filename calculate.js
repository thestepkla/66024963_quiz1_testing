function calculateOfRisk(pressure, sugar){

    if(!(typeof pressure === "number" && typeof sugar === "number")){
        return "Invalid input type is not a number";
    }

    if(pressure < 0 || sugar < 0){
        return "Invalid input value is negative";
    }

    let status = null;
    if(pressure <= 120 && sugar <= 100){
        status = "general";
    }
    else if(pressure <= 139 && sugar <= 125){
        status = "risk";
    }
    else if(pressure <= 159 && sugar <= 154){
        status = "High risk level 1";
    }
    else if(pressure <= 179 && sugar <= 182){
        status = "High risk level 2";
    }
    else if(pressure >= 180 && sugar >= 183){
        status = "High risk level 3";
    }

    return status;  
}

module.exports = calculateOfRisk;