//initialize function called when the script loads
function initialize(){
	loadData();
	debugAjax();
};

function loadData(){
	var cities;

	fetch("data/MegaCities.geojson")
		.then(function(response){
			return response.json();
		})
		.then(function(response) {
			cities = response;
			console.log(cities);
		})
}

function debugCallback(mydata){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend',"GeoJSON data: " + JSON.stringify(mydata));
};

function debugAjax(){
	fetch("data/MegaCities.geojson")
		.then(function(response){
			return response.json();
		})
		.then(debugCallback)
};
