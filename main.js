const BASE_URL = "https://zagster-service.herokuapp.com"
var chartData = []
var rideData = []
$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month" , getData)
}

function updateRideCount(data) {
    $("h2#count").html(data.count);
    $("h2#count").css('visibility', 'visible').hide().fadeIn("slow");
}

function getData(data) {
    rideData = data;
    console.log(rideData[2017]);
} 
for ( var i = [2017][0]; i <= [2017][11]; ++i){
chartData.push(rideData[2017][i][month]);
}


