//creat function
function calculateTip() {
    //store data
    var billAmount = document.getElementById("billAmount").value,
        serviceQuality = document.getElementById("serviceQuality").value,
        totalPeople = document.getElementById("totalPeople").value;
    
    if (billAmount === "" || billAmount <= 0 || serviceQuality === 0) {
        return window.alert("Please enter some values !");

    }
    
    if (totalPeople === "" || totalPeople <= 1) {
        totalPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "bock";
    }
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    //window.alert(total);
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
// notifications message
//hide the tip amount
document.getElementById("totalTip").style.display = "none";
//fuction build
document.getElementById("calculate").onclick = function () {
    calculateTip();
};