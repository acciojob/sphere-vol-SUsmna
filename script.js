function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	var radius = parseFloat(document.getElementById('radius').value);
	if (isNaN(radius) || radius < 0 ){
		document.getElementById('volume').value = 'NaN';
		return;
	}
	var volume =(4/3)* Math.PI * Math.pow(radius, 3);
	volume = volume.toFixed(4);
	document.getElementById('volume').value = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
