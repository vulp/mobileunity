#pragma strict

var maxy = 5;
var maxx = 5;
var cube : Transform;
var spacex = 0.5;
var spacey = 0.5;
var startx = -41;
var starty = 250;

function Start () {
	for(var y = 0; y < 5; y++){
		for(var x = 0; x < 5; x++){		
		var cube = Instantiate(cube, Vector3 (startx + (x * (cube.transform.localScale.x + spacex)),starty + (y * (cube.transform.localScale.y + spacey)), 0), Quaternion.identity);				
		}
	}
}

function Update () {

}