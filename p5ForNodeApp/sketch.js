function setup() {

	var button = select('#submit');
	button.mousePressed(submitValue);
	//adding analyze butyon for post request on a text area
	var buttonA = select('#analyze');
	buttonA.mousePressed(analyzeThis);//function hai
}
function analyzeThis() {
	var tt = select('#textinput').value();
	var data = {
		text: tt
	}
	httpPost('analyze/', data, 'json', dataPosted, postErr);
	console.log(data);// a p5 function to directly post 
	//like using loadJSON for get request
}



function submitValue() {
	var name = select('#name').value();
	var value = select('#value').value();

	loadJSON('add/' + name + '/' + value, completed);//loadJSON is a type of get request
	function completed(data) {
		var data = {
			name: name,
			value: value
		}
		console.log(data);
	}
}

function dataPosted(result) {
	console.log(result);
}

function postErr(err) {
	console.log(err);
}